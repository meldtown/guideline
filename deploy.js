const fs = require('fs')
const mime = require('mime-types')
const AWS = require('aws-sdk')

const s3 = new AWS.S3({signatureVersion: 'v4', region: 'eu-central-1'})

fs.readdir('./dist', (err, files) => {
	files.forEach(file => {
		fs.readFile('./dist/' + file, function (err, data) {
			if (err) throw err

			let params = {
				Bucket: 'rua-assets',
				Key: 'fedor/' + file,
				Body: data,
				ContentType: mime.lookup(file)
			}

			s3.putObject(params, function (err) {
				if (err) console.log(err)
				else console.log(file + ' uploaded')
			})
		})
	})
})
