const express = require('express')
const bcrypt = require('bcryptjs')
const {User} = require('../models')
const router = express.Router()

router.post('/join', async(req, res, next)=>{
    const {nickName, email, password} = req.body
    try {
        const exUser = await User.findOne({where: {email}})
        if(exUser){
            req.flash('joinError', '사용중인 이메일 입니다')
            return res.redirect('/join')
        }
        const hash = await bcrypt.hash(password, 14)
        await User.create({
            email,
            nickName,
            password:hash
        })
        return res.redirect('/')
    }catch(error){
        return next(error)
    }
})


router.post('/login', async(req, res, next) =>{
    const {email, password} = req.body

    try {
        const exUser =  await User.findOne({where: {email}})
        if(exUser){
            const isSame = await bcrypt.compare(password, exUser.password)
            if(isSame){
                req.session.email = email
                return res.redirect('/afterLogin')
            }else{
                req.flash('wrongPassword', '잘못된 password')
                return res.redirect('/')
            }
        }else{
            req.flash('notRegistered', '가입되지 않은 사람 or 잘 못된 이메일')
            return res.redirect('/')
        }
    }catch(error){
        next(error)
        return
    }
})

router.get('/logout', (req, res, next)=>{
    req.session.destroy()
    return res.redirect('/')
})

module.exports = router