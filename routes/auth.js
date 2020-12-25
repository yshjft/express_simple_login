const express = require('express')
const bcrypt = require('bcryptjs')
const {User} = require('../models')
const router = express.Router()

router.post('/join', async(req, res, next)=>{
    const {nickName, email, password} = req.body
    try {
        const exUser = await User.findOne({where: {email}})
        if(exUser){
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


router.post('/login', (req, res, next) =>{

})

module.exports = router