let arr = [0.234234234234, 1, 23, 99];

function minNumber() {
    //return Math.min.apply(null, arr);
    //return Math.min(0.234234234234, 1, 23, 99);
    return Math.min.apply(null, [0.234234234234, 1, 23, 99]);
}
console.log(minNumber());