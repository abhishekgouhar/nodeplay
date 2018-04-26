// if our Employee.js file is at app/models/Employee.js
var Employee = require('./models/employee_model');

// create a new Employee 
  var employeeDetails = new Employee({
        name: 'Kishor Kumar',
        employeeCode: 'KK001',
        phoneNumber: 8878457896,
        email: 'kk@gmail.com',
        age: 24,  
        address: 'Bund Garden Road Pune',
        meta: {
          designation: 'SSE',
          Experience: 4
        }
      });

function readEmployee(employeeName){
  // get all the Employees
  var employeeCond={};
  
  if(employeeName)
    employeeCond = { name: employeeName };
  
  Employee.find(employeeCond, function(err, Employees) {
    if (err) throw err;

    // object of all the Employees
    console.log(Employees);
  });  
}

function updateEmployee(employeeName){
  // get a user with ID of 1
  try{
      Employee.update( { name: employeeName }, 
                       { phoneNumber: 564634353 },
                       { multi: true },
                       function(err) {
                        if (err) throw err;
                        console.log('Employee successfully updated!');
                       });    
  }
  catch(err){
    console.log(err);
  }
  /*Employee.findOne({name:employeeName}, function(err, emp) {
    if (err) throw err;
    console.log(emp);
    // change the users location
    emp.phoneNumber = 564634353;

    // save the user
    emp.save(function(err) {
      if (err) throw err;

      console.log('Employee successfully updated!');
    });

  });*/
}

function updateEmployeeByID(employeeID){
  // get a user with ID of 1
  Employee.findById(employeeID, function(err, emp) {
    if (err) throw err;

    // change the users location
    emp.phoneNumber = 564634353;

    // save the user
    emp.save(function(err) {
      if (err) throw err;

      console.log('Employee successfully updated!');
    });

  });
}

function anotherUpdateWay(employeeID){
  // find the user with id 4
  // update username to starlord 88
  Employee.findByIdAndUpdate(employeeID, { phoneNumber: 7845784578 }, function(err, emp) {
    if (err) throw err;

    // we have the updated user returned to us
    console.log(emp);
  });
}

function createEmployee(){  
  // call the built-in save method to save to the database
  employeeDetails.save(function(err) {
    if (err) throw err;

    console.log('Employee Created!');
  });
}

//Remove User
function removeEmployeeByName(employeeName){
  // get the user starlord55
  Employee.findOne({ name: 'Suraj' }, function(err, emp) {
    if (err) throw err;

    // delete him
    emp.remove(function(err) {
      if (err) throw err;

      console.log('Employee successfully deleted!');
    });
  });
}

//REmove By ID
function removeEmployeeByID(employeeID){
  // get the user starlord55
  Employee.findByIdAndRemove(employeeID, function(err, emp) {
    if (err) throw err;
    
    console.log('Employee successfully deleted!');    
  });
}

// createEmployee();
// readEmployee('');
updateEmployee('Kishor Kumar');
// readEmployee('');
