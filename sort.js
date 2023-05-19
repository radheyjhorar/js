let points = [40, 100, 1, 5, 25, 10];
console.log("Normal Array = " + points);
console.log("Sort Alphabetically = " + points.sort());
console.log("Sort Numerically = " + points.sort(function(a, b) {return a - b}));


//Sorting an Array in Random Order 

let arr = [40, 20, 36, 9, 5, 1]
console.log(arr.sort(function(){return 0.5 - Math.random}));