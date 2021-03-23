const bcrypt = require('bcryptjs')
const userCollection = require('../db').collection("users")
const validator = require('validator');

let User = function(data)  {
   this.data = data;
   this.errors = [];
   

};


User.prototype.cleanUp = function() {
   if(typeof(this.data.username) != "string") {this.data.username = ""};
   if(typeof(this.data.email) != "string") {this.data.email = ""};
   if(typeof(this.data.password) != "string") {this.data.password = ""};

   // ge rid of any bogus properties
   this.data = {
      username : this.data.username.trim().toLowerCase(),
      email: this.data.email.trim().toLowerCase(),
      password: this.data.password
   }
}

User.prototype.validate = function(){
   if (this.data.username == "") {this.errors.push("You must provide a username.")}
   if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username aca onl conarin letters and numbers.")}
   if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a vlid email.")}
   if (this.data.password == "") {this.errors.push("You must provide a password.")}
   if(this.data.password.length > 0 && this.data.password.length < 6) {this.errors.push("Password must be at least 12 caracters")}
   if(this.data.password.length > 100) {this.errors.push("Password can not exceed 100 characters.")}
   if(this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 caracters")}
   if(this.data.username.length > 20) {this.errors.push("Username can not exceed 100 characters.")}
};

User.prototype.login = function () {
   this.cleanUp()
  return new Promise( (resolve, reject) => {
   userCollection.findOne({username: this.data.username}).then(() =>{
      if(attemptedUser && attemptedUser.password == this.data.password ) {
         resolve("Congrats!!")
      } else {
         reject("Invalid user /password")
      }
   }).catch(()=>{
      reject("Please try again later.")
   })
  })
}

User.prototype.register = function() {
   // Step #1: Validate user data
   this.cleanUp()
   this.validate()


   //Step #2: Only if ther are no validation errors
   //then save the user data into a database
    if (!this.errors.length){
       userCollection.insertOne(this.data)
    }

};


module.exports = User;