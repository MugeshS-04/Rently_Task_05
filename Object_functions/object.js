let employee = {
    name1: "Mugesh S",
    age: "21",
    position: "Software Engineer",
    display : function(){
        console.log("Hello World!")
    }
}

//create() - used to create the object from the existing object(has access to their data and methods)
let intern = Object.create(employee)

//__proto__ - used to access the parent object
console.log(intern.__proto__.name1)

intern.name1 = "ABCD"
console.log(intern.name1)

//entries() - used for iteration of the elements in object
console.log(Object.entries(employee))
console.log(employee)

//hasOwnPrototype() - used to find whether the given property is its own property or not
console.log(intern.hasOwnProperty("name1"))
console.log(intern.hasOwnProperty("name2"))

//freeze() - used to lock the obj, no updation and extention
Object.freeze(intern)
console.log(delete intern.name1)

//seal() - like freeze, but allows updation
Object.seal(intern)
intern.name1 = "ABC"
console.log(intern.name1)
console.log(delete intern.name1)