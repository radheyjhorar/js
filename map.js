let numbers = [20, 45, 25, 10, 5, 12, 7, 2];
console.log(numbers);

let numbers2 = numbers.map(myFunction);
console.log(numbers2);

function myFunction(value) {
    return value * 2;
}

// Note that the function takes 3 arguments:

        // The item value
        // The item index
        // The array itself
        
// When a callback function uses only the value parameter, the index and array parameters can be omitted:

// function myFunction(value, index, array) {
//     return value * 2;
// }