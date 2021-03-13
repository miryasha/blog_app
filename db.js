const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb');
const PORT = process.env.PORT || 3000;




mongodb.connect(process.env.CONNECTIONSTRNG,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
   module.exports = client.db()
   const app = require('./app')
   app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});