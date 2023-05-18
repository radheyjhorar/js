let points = [40, 100, 1, 5, 25, 10];
console.log("Normal Array = " + points);
console.log("Sort Alphabetically = " + points.sort());
console.log("Sort Numerically = " + points.sort(function(a, b) {return a - b}));