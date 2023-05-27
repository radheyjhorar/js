let arr = [45, 12, 2, 4, 8, 19, 23, 43, 90, 56, 36, 122, 400, 1, 3, 5];
let over18 = arr.filter(myFunction);
console.log(over18);

function myFunction(value) {
    return value > 18;
};

    //Note that the function takes 3 arguments:

        //The item value
        //The item index
        //The array itself
        
    //In the example above, the callback function does not use the index and array parameters, so they can be omitted:

// function myFunction(value, index, array) {
//     return value > 18;
// }