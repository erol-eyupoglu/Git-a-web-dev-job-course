var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>html is great</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    console.log("Congrats");
  }

});


var myPhotoURL = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*';

https.get(myPhotoURL, function(response) {
  response.pipe(fs.createWriteStream(__dirname + '/mydog.jpg'));
});