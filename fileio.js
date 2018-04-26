var fs = require("fs");

fs.readFile('eventex.js', function (err, data) {
   if (err){
      console.log('error: '+err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");