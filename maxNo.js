let numbers = [40, 50, 60, 1, 900, 600];

function maxNo(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
console.log(maxNo(numbers));