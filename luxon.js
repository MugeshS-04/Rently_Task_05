const { DateTime } = require('luxon')

console.log("Current date and time");
console.log(DateTime.now().toFormat('yyyy-MM-dd hh:mm:ss a'))

console.log("Specific time")
console.log(DateTime.fromObject({}, {zone: 'Asia/Kolkata'}).toFormat('yyyy-MM-dd hh:mm:ss a'))

let ind = DateTime.fromObject({hour: 12, minute: 30, second: 45}, {zone: 'Asia/Kolkata'})
let utc_ = ind.setZone('UTC')
let pst = ind.setZone('America/Los_Angeles')

console.log(ind.toFormat('hh:mm:ss a'))
console.log(utc_.toFormat('hh:mm:ss a'))
console.log(pst.toFormat('hh:mm:ss a'))
