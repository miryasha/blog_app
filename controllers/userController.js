const User = require('../models/User')

exports.login = () => {

};

exports.logout = () => {
      
};

exports.register = (req, res) => {
    let user = new User(req.body)
    user.register();

    res.send("Thank for tryin to register")   
};

exports.home = (req, res) => {
    res.render('home-guest')
};