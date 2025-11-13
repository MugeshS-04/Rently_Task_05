let date = new Date()

//Current-time
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())

//Local Time-Date functions
    console.log(date.toLocaleDateString("uk-en"))
    console.log(date.toLocaleTimeString("uk-en"))

//Time - Date functions
    console.log(date.toTimeString())
    console.log(date.toDateString())
    console.log(date.toString())

//UTC
    console.log(date.toUTCString())
    console.log(date.getUTCDate())

//timestamp
    let new_date = new Date(1382086394000)
    console.log(new_date.toLocaleDateString())
    let new_date2 = new Date(new_date)
    console.log(new_date2.valueOf())


// let time = date.toTimeString()
// console.log(totwelvehourformat(time))
// function totwelvehourformat(time)
// {
//     let twelve_hr = ""
//     let i = 0

//     for(i = 0; i < time.length; i++)
//     {
//         if(time[i] == ":") break;
//         twelve_hr += time[i]
//     }

//     let meridian = "AM"

//     if(twelve_hr > 12) meridian = "PM"

//     twelve_hr = twelve_hr % 12

//     if(twelve_hr == 0){
//         twelve_hr = "12"   
//     }

//     let j = i

//     for(; i < time.length; i++)
//     {
//         if(time[i] == "G") break;
//     }

//     twelve_hr += time.substring(j , i) + meridian

//     return twelve_hr

// }