const fs = require('fs')
const mime = require('mime-types')
const git = require('git-rev')
const AWS = require('aws-sdk')

const s3 = new AWS.S3({signatureVersion: 'v4', region: 'eu-central-1'})

const branch2bucket = {
	master: 'rua-assets-frankfurt',
	dev: 'rua-assets-dev'
}

git.branch(branch => {
	if (branch2bucket[branch]) {
		fs.readdir('./dist', (err, files) => {
			files.forEach(file => {
				fs.readFile('./dist/' + file, function (err, data) {
					if (err) throw err

					let params = {
						Bucket: branch2bucket[branch],
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
	} else {
		console.log('Nothing to do, only master and dev branches are deployed')
	}
})
