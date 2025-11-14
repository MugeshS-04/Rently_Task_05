let arr = [1, 2, 4, 2, 4, 6, 7, 9, 10, 88]

//at() - enables both positive and negative indexing
console.log(arr.at(-1))

//concat() - used to concat the array at end
console.log(arr.concat([2, 2, 3, 5, 6]))

//pop() - used to pop the last element
console.log(arr.pop())

//push() - used to push the element at last
console.log(arr.push(100))

//sort() - used to sort the original array
arr.sort((a, b) => a - b)

//sorted() - used to sort the copied version of the array
let arr2 = arr.toSorted((a, b) => a - b)

console.log(arr2)

//toString() - to make array from string
console.log(arr.toString())

let word = "Hello !, How are you?"

//.split() - to split the string according to the parameter and assign index
console.log(word.split(" "))

//splice() - modify the original array with starting index, and no of elements to delete and inserting new element
console.log(arr.splice(3, 5, "hello", "world"))

console.log(arr)

//slice() - used to trim the array with starting index or with both start and end
console.log(arr.slice(2));

//shift() - used to shift the array to one element left
arr.shift()

console.log(arr)

//findIndex() - returns the index of the conditions passing first element from left to right
console.log(arr.findIndex((ele) => ele == 10))
