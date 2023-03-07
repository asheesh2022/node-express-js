const path = require('path')

console.log(path.sep)
const file  = path.join("/content/" , "subfolder","txt.txt")

console.log(file)

const base = path.basename(file)
console.log(base)