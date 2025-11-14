let date = new Date()
const moment = require('moment-timezone')
const { DateTime, Zone } = require('luxon')

//current date
console.log(date.toLocaleDateString("uk-en"))
console.log(moment().format("DD/MM/yyyy"))
console.log(DateTime.now().toFormat('dd/MM/yyyy'))

//current time
console.log(date.toLocaleTimeString("us-en", { hour12 : true }))
console.log(moment().format("hh:mm:ss A"))
console.log(DateTime.now().toFormat("hh:mm:ss a"))

//timestamp
console.log(date.getTime())
console.log(moment().valueOf())
console.log(DateTime.now().toMillis())

//IST TO UTC, PST
let time = "2025-10-11 12:30:30 AM"
let ind = moment.tz(time, "yyyy-MM-DD hh:mm:ss A", "Asia/Kolkata")
console.log(ind.clone().tz("UTC").format("yyyy-MM-DD hh:mm:ss A"))
console.log(ind.clone().tz("America/Los_Angeles").format("yyy-MM-DD hh:mm:ss A"))

let date_object = DateTime.fromFormat(time, "yyyy-MM-dd hh:mm:ss a", { zone : "Asia/Kolkata"})
console.log(date_object.setZone("GMT").toFormat("yyyy-MM-dd hh:mm:ss a"))
console.log(date_object.setZone("America/Los_Angeles").toFormat("yyyy-MM-dd hh:mm:ss a"))
