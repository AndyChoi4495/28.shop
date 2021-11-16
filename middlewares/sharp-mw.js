const sharp = require('sharp');
const {
  relPath
} = require('../modules/util')

module.exports = (size = 120) => {
  return (req, res, next) => {
    try {
      const files = req.files;
      console.log(files)
      /*  sharp('input.jpg')
          .rotate()
          .resize(200)
          .jpeg({
            mozjpeg: true
          })
          .toBuffer()
          .then(data => {
            console.log(date)
          })
          .catch(err => next(err)); */

    } catch (err) {
      next(err)
    }
  }
}