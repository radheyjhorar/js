let arr = [12, 35, 1, 10, 34, 1]
let second = (a, b)=>{
         return b - a
     }
arr.sort(second);

console.log(arr[1]);