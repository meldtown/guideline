var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3({
    signatureVersion: 'v4',
    region: 'eu-central-1'
});

fs.readFile('./dist/index.css', function (err, data) {
	if (err) console.log(err)
	else {
		var params = {
			Bucket: 'pornushka',
			Key: 'index.css',
			Body: data
		};

		s3.putObject(params, function (err, data) {
			if (err) console.log(err)
			else console.log('Success');
		});
	}
});
