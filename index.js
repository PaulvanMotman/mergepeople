var fs = require('fs');
var result1
var result2
var totalpeople 

var numFilesRead = 0;
function complete() {
  numFilesRead++;
  if (numFilesRead === 2) {
    totalpeople = result1.concat(result2)
    fs.writeFile('./peoplecomplete.txt', totalpeople.sort(), function (err) {
    	if (err) {
        	console.error('Crap happens');
    	}
	})
  }
}

fs.readFile('./people.json', function(err, data) {
	if (err) {
		throw err;
	}
	result1 = JSON.parse(data) 
  	complete();
});

fs.readFile('./people2.json', function(err, data) {
	if (err) {
		throw err;
	}
	result2 = JSON.parse(data) 
  	complete();
});












































