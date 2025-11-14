let word = "Hello World!"

//index() - used to find the index of the given character
console.log(word.indexOf('H'))

//at() - allows both negative and positive index
console.log(word.at(-1))

//startsWith() - used to find whether the given string is in the starting
console.log(word.startsWith("Hel"))

//endsWith() - same as startswith, but backwards
console.log(word.endsWith("!"))

//slice() - used to trim the string from beginning index or in betweeen start and end
console.log(word.slice(2, 4))

//toUpperCase() - used to change the case to upper case
console.log(word.toUpperCase())

//trim() - used to trim the spaces from both front and beginning
console.log(word.trim())

//replace() - used to replace the first string matching the string
console.log(word.replace("Hello", "."))

//padEnd() - used to fill the string with space or give given character for the given no of space
console.log(word.padEnd(25, "."))

//padStart() - same as padEnd, but in the beginning
console.log(word.padStart(25, "."))