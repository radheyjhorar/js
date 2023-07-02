// Primitive Data types
// typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol


//Non-primitive types
// Example
var obj1 = {
        x:  43,
        y:  "Hello world!",
        z: function(){
        return this.x;
        }
}

var array1 = [5, "Hello", true, 4.1]; 
//console.log(obj1)
//console.log(array1)


// Difference between “ == “ and “ === “ operators.
let a = 20
let b = "20"
//(a == b)  Returns true since the value of both a and b is the same
//(a === b)  Returns false since the typeof a is "number" and typeof b is "string"
console.log(a == b)
console.log(a === b)
