const express = require('express');
const router = require('./router')


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home-guest')
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });