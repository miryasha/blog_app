exports.login = () => {

};

exports.logout = () => {
      
};

exports.register = (req, res) => {
    console.log(req.body)
    res.send("Thank for tryin to register")   
};

exports.home = (req, res) => {
    res.render('home-guest')
};