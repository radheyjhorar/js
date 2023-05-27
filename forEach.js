let numbers = [45, 4, 9, 16, 25];

let txt = "  ";

numbers.forEach(myFunction);
console.log(txt);

function myFunction(value) {
    txt += value + "  ";
};

// Note that the function takes 3 arguments:

        // The item value
        // The item index
        // The array itself
        
// The example above uses only the value parameter. The example can be rewritten to:

// function myFunction(value, index, array) {
//     txt += value + "  ";
// };