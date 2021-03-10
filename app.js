const express = require('express');
const router = require('./router')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs')

app.use('/', router)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });