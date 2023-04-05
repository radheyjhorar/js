let text1 = "John Deo";
let mobileNo1 = "9518852747";
let text2 = "ramramramramram"

console.log(text1.length);
console.log(mobileNo1.length);

console.log(text1.slice(4, 16));
console.log(text1.substring(6, 10));
console.log(text2.replace("r", "R"));
// console.log(text2.replaceAll("r", "R"));
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());
console.log(text2.concat(" ", mobileNo1, " ",text1));
console.log(text2.trim());
console.log(text2.trimStart());
console.log(text2.trimEnd());
console.log(text2.padEnd(18));
console.log(text2.padStart(200));
console.log(text1.charAt(0));
console.log(text1.charCodeAt(5));
console.log(text1.split(""));


let text = "Please locate where 'locate' occurs!";
let fruit = "Banana Mango Orange Kiwi";
let index = text.indexOf("locate");
console.log(text.indexOf("occurs!"));

console.log(fruit.lastIndexOf("Kiwi"));
console.log(fruit.indexOf("Kiwi"));
console.log(fruit.search("Mango"));

console.log(fruit.match("M"));

console.log(fruit.includes("Mango"));

console.log(text.includes("e "));

console.log(text.startsWith("P"));
console.log(text.endsWith("Please"));
console.log(text.endsWith("!"));

