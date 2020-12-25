const express = require('express')

const router = express.Router()

router.post('/join', (req, res, next)=>{
    const {nickName, email, password} = req.body
    console.log(req.body)
    res.redirect('/')
})


router.post('/login', (req, res, next) =>{

})

module.exports = router