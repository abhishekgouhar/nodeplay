// if our user.js file is at app/models/user.js
var User = require('./mongo-model');

// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'chrishad',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User Created!');
});

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});