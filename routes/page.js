const express = require('express')
const {isLoggedIn, isNotLoggedIn} = require('./middleware')
const router = express.Router()


router.get('/',  isNotLoggedIn, (req, res, next)=>{
    res.render('index', {
        title: 'simple login',
        notRegistered: req.flash('notRegistered'),
        wrongPassword: req.flash('wrongPassword')
    })
})

router.get('/join', isNotLoggedIn, (req,res, next)=> {
    res.render('join', {
        title: 'join',
        joinError: req.flash('joinError'),
    })
})

router.get('/afterLogin', isLoggedIn, (req,res, next)=>{
    console.log(req.session)
    res.render('afterLogin', {
        title:'after login'
    })
})

module.exports = router