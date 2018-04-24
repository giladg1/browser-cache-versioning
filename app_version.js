const fs = require('fs')
const path = require('path')
const ver = require('./version')

const versionObj = Object.assign(ver, {})
const oldAppVer = versionObj.version
const verNumText = versionObj.cleanVersion.slice(12)
let verNum = Number(verNumText)
verNum++ // increment number
verNum = verNum.toString()
verNum = process.env.VER_RESET === 'true' ? '1' : verNum.toString() // if we want to reset version number to 1, if not use our increment value
const newAppVer = `app_version_${verNum}`

const updateFilesVersion = (fileNameLocation) => {
  const someFile = path.join(__dirname, fileNameLocation)
  fs.readFile(someFile, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const result = data.replace(oldAppVer, newAppVer);

    fs.writeFile(someFile, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

// add location and file full name. root location will start from where app_version.js is located
filesLocation = [
  'version.js',
  'dist_example/index.html',
  'dist_example/another_file.html'
]

// loop on the array and update version
filesLocation.forEach((value, index) => {
  updateFilesVersion(value)
  if (index === (filesLocation.length - 1)) {
    console.log('App Version Was Updated To: ', newAppVer)
  }
})


