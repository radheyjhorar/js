//let num = [11, 21, 31, 41, 51, 61, 71]
// let b = num.toString()
// console.log(b, typeof b)

// let c = num.join(" & ")
// console.log(c, typeof c)

// let r = num.pop()
// console.log(num, r)

//let d = num.push(45)
//console.log(num, d)

// let shift = num.shift()
// console.log(shift, num)

// let unshift = num.unshift(81)
// console.log(unshift, num)

// let del = delete num[0]
// console.log(num, del)


//concat method
// let no = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let no2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let no3 = [21, 22, 23, 24, 25, 26, 27, 28, 29]

// let newArr = no.concat(no2, no3)
// console.log(newArr)


//sort method
// let compare = (a, b)=>{
//     return b - a
// }
// let str = ["radhey", "jhorar", "sanjay", "rahul", "amit", "bahadur", "gopi", "tarun"]
// let num = [532, 22, 456, 66, 890, 32, 229, 12, 399]
// str.sort()
// num.sort(compare)
// console.log(str)
// console.log(num)


//Reverse Method
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// num.reverse()
// console.log(num)


//Splice and Slice
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]
// let deletedValues = num.splice(2, 4, 1022, 1023, 1024, 1025, 1026)
// console.log(num)
// console.log(deletedValues)
let newNum = num.slice(3, 5)
console.log(newNum)