let arr = [45, 4, 9, 16, 25, 1, 99, 51];
let arrSum = arr.reduce(myFunction, 100);
console.log("Array Sum is " + arrSum);

// function myFunction(total, value,) {
//     return total + value;
// };

    //Note that the function takes 4 arguments:

        //The total (the initial value / previously returned value)
        //The item value
        //The item index
        //The array itself
    //The example above does not use the index and array parameters. It can be rewritten to:

function myFunction(total, value) {
    return total + value;
};