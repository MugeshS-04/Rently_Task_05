const moment = require('moment-timezone')

// current date and time
console.log("Current date and time");
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

console.log("Specific time in Taipei");
console.log(moment.tz("2013-11-18 11:55", "Asia/Taipei").format('YYYY-MM-DD HH:mm:ss'));

//IST to GMT/UTC
let ind = moment.tz('Asia/Kolkata')
let utc_ = ind.clone().tz("GMT")

//IST to PST
let pst = ind.clone().tz("America/Los_Angeles")

console.log(ind.format('hh:mm:ss A'))
console.log(utc_.format('hh:mm:ss A'))
console.log(pst.format('hh:mm:ss A'))
