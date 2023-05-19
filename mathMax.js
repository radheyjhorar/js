let arr = [40, 100, 1, 5, 25, 10, 400, 400.1];

function myArrayMax() {
    return Math.max.apply(null, arr)
    //return Math.max.apply(null, [40, 1, 5, 25, 10])
    //return Math.max(40, 1, 5, 25, 10)
}
console.log(myArrayMax())