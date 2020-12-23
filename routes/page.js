const express = require('express')

const router = express.Router()


router.get('/', (req, res, next)=>{
    res.render('index', {
        title: 'simple login'
    })
})

router.get('/join', (req,res, next)=> {
    res.render('join', {
        title: 'join'
    })
})

router.get('/afterLogin', (req,res, next)=>{
    res.render('afterLogin', {
        title:'after login'
    })
})

module.exports = router