// Requiring filesytem
var fs = require('fs')

// Creating three global variables to store the data of the files in
var result1
var result2
var totalpeople 

// Counting the files read to make sure the concatenating part of the function only triggers when
// both files are read.
var numFilesRead = 0;

// Fucntion that concatenates files
function complete() {
  // Counter
  numFilesRead++
  // If both files are read..
  if (numFilesRead === 2) {
    // Add the two arrays together
    totalpeople = result1.concat(result2)
    // Create a new file where we store a sorted version of the data of the array we just created
    fs.writeFile('./people/peoplecomplete.txt', totalpeople.sort(), function (err) {
    	if (err) {
        	console.error('Following error is showing up: ' + err);
    	}
    })
  }
}

// Reading file 1
fs.readFile('./people/people.json', function(err, data) {
	if (err) {
		throw err;
	}
	result1 = JSON.parse(data) 
  complete();
});

// Reading file 2
fs.readFile('./people/people2.json', function(err, data) {
	if (err) {
		throw err;
	}
	result2 = JSON.parse(data) 
  complete();
});












































