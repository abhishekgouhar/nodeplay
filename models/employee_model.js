// grab the things we need
var mongoose = require('mongoose');
//connect to our local db
mongoose.connect('mongodb://localhost/nodeplay');

  // we're connected!  
  var Schema = mongoose.Schema;

  // create a schema name age employecode isactive designation Experience
  var employeeSchema = new Schema({
    name: { type: String, required: true },
    employeeCode: { type: String, required: true, unique: true, index: true },
    phoneNumber: { type: Number, required: true },
    email: String,
    age: Number,
    isActive: { type: Boolean, default: true },
    address: String,
    meta: {
      designation: String,
      Experience: Number
    },
    created_at: Date,
    updated_at: Date
  });


  // on every save, add the date
  employeeSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
      this.created_at = currentDate;

    next();
  });

  // the schema is useless so far
  // we need to create a model using it
  var Employee = mongoose.model('Employee', employeeSchema);

  // make this available to our users in our Node applications
  module.exports = Employee;

