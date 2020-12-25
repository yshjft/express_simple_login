exports.isLoggedIn = (req, res, next) => {
    if(req.session.email){
        next()
    }else{
        res.redirect('/')
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.session.email){
        next()
    }else{
        res.redirect('/afterLogin')
    }
}