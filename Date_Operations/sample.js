let date = new Date()
const moment = require('moment-timezone')
const { DateTime } = require('luxon')

//getting current timestamp
console.log(date.getTime())

//current time
console.log(date.toLocaleString("uk-en", {timeZone: 'Asia/Kolkata'}))

//UTC time
console.log(date.toLocaleString("uk-en", {timeZone: 'UTC'}))

//PST time
console.log(date.toLocaleString("uk-en", {timeZone: 'America/Los_Angeles'}))

//Specific time in IST
let time = new Date("2023-10-10T12:30:45+0530")
console.log(time.toLocaleString("uk-en", {timeZone: "UTC"}))

//current time
console.log(moment().format('yyyy-MM-DD hh:mm:ss a'))

//current timestamp
console.log(moment().valueOf())

//IST
console.log(moment().tz("Asia/Kolkata").format('yyyy-MM-DD hh:mm:ss a'))

//UTC
console.log(moment().tz("UTC").format('yyyy-MM-DD hh:mm:ss a'))

//PST
console.log(moment().tz("America/Los_Angeles").format('yyyy-MM-DD hh:mm:ss a'))

//specific time to UTC
let ind = moment.tz("2025-10-11 12:30:30", "yyyy-MM-DD hh:mm:ss a", "Asia/Kolkata")
let utc_ = ind.clone().tz("UTC").format("yy-MM-DD hh:mm:ss a")
console.log(utc_)


//current time
console.log(DateTime.now().toFormat("yyyy-MM-dd hh:mm:ss a"))

//timestamp
console.log(DateTime.now().toMillis())

//IST
console.log(DateTime.fromObject({}, { zone : "Asia/Kolkata"}).toFormat("yyyy-MM-dd hh:mm:ss a"))

//UTC
console.log(DateTime.fromObject({}, { zone : "UTC"}).toFormat("yyyy-MM-dd hh:mm:ss a"))

//PTC
console.log(DateTime.fromObject({}, { zone : "America/Los_Angeles"}).toFormat("yyyy-MM-dd hh:mm:ss a"))

//Specific time to UTC
let ind1 = DateTime.fromObject({hour : 11, minute: 40, second: 40}, {zone: "Asia/Kolkata"})
console.log(ind1.setZone("America/Los_Angeles").toFormat("yyyy-MM-dd hh:mm:ss a"))
console.log(ind1.setZone("GMT").toFormat("yyyy-MM-dd hh:mm:ss a"))


