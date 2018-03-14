const geometry = require("./geometry");

console.log("Calculate volume of rectangle prism");
console.log("-------------------------------------");


let volumeofrectprism = geometry.volumeOfRectangularPrism(12,12,13);
console.log("The Volume of a rectangular prism is: "+ volumeofrectprism);
// Result will be 1872.

volumeofrectprism = geometry.volumeOfRectangularPrism(1,2,3);
console.log("The Volume of a rectangular prism is: "+ volumeofrectprism);
// Result will be 6.

volumeofrectprism = geometry.volumeOfRectangularPrism(6,2,10);
console.log("The Volume of a rectangular prism is: "+ volumeofrectprism);
// Result will be 120.

volumeofrectprism = geometry.volumeOfRectangularPrism(11,122,213);
console.log("The Volume of a rectangular prism is: "+ volumeofrectprism);
// Result will be 285846.

volumeofrectprism = geometry.volumeOfRectangularPrism(13,42,33);
console.log("The Volume of a rectangular prism is: "+ volumeofrectprism);
// Result will be 18018.


console.log("\nCalculate surface area of rectangle prism");
console.log("--------------------------------------------");

let surfaceareaofrectprism = geometry.surfaceAreaOfRectangularPrism(1,2,3);
console.log("The Surface area of a rectangular prism is: "+ surfaceareaofrectprism);
// Result will be 22.

surfaceareaofrectprism = geometry.surfaceAreaOfRectangularPrism(12,22,33);
console.log("The Surface area of a rectangular prism is: "+ surfaceareaofrectprism);
// Result will be 2772.

surfaceareaofrectprism = geometry.surfaceAreaOfRectangularPrism(11,20,13);
console.log("The Surface area of a rectangular prism is: "+ surfaceareaofrectprism);
// Result will be 1246.

surfaceareaofrectprism = geometry.surfaceAreaOfRectangularPrism(1.5,2.3,3.5);
console.log("The Surface area of a rectangular prism is: "+ surfaceareaofrectprism);
// Result will be 33.5.

surfaceareaofrectprism = geometry.surfaceAreaOfRectangularPrism(10,20,30);
console.log("The Surface area of a rectangular prism is: "+ surfaceareaofrectprism);
// Result will be 2200.


console.log("\nCalculate volume of sphere");
console.log("-----------------------------");

let volumeofsphere = geometry.volumeOfSphere(18);
console.log("The volume of a sphere is: "+ volumeofsphere);
// Result will be 24429.02

volumeofsphere = geometry.volumeOfSphere(8);
console.log("The volume of a sphere is: "+ volumeofsphere);
// Result will be 2144.66

volumeofsphere = geometry.volumeOfSphere(2.5);
console.log("The volume of a sphere is: "+ volumeofsphere);
// Result will be 65.44

volumeofsphere = geometry.volumeOfSphere(10);
console.log("The volume of a sphere is: "+ volumeofsphere);
// Result will be 4188.79

volumeofsphere = geometry.volumeOfSphere(22);
console.log("The volume of a sphere is: "+ volumeofsphere);
// Result will be 44602.23

console.log("\nCalculate surface area of sphere");
console.log("-----------------------------------");

let surfaceareaofsphere = geometry.surfaceAreaOfSphere(16);
console.log("The surface area of a sphere is: "+ surfaceareaofsphere);
// Result will be 3216.99

surfaceareaofsphere = geometry.surfaceAreaOfSphere(2);
console.log("The surface area of a sphere is: "+ surfaceareaofsphere);
// Result will be 50.26

surfaceareaofsphere = geometry.surfaceAreaOfSphere(9);
console.log("The surface area of a sphere is: "+ surfaceareaofsphere);
// Result will be 1017.87

surfaceareaofsphere = geometry.surfaceAreaOfSphere(26);
console.log("The surface area of a sphere is: "+ surfaceareaofsphere);
// Result will be 8494.86

surfaceareaofsphere = geometry.surfaceAreaOfSphere(2.09);
console.log("The surface area of a sphere is: "+ surfaceareaofsphere);
// Result will be 54.89


const utility = require("./utilities");

console.log("\nCheck if given objects are same or not");
console.log("----------------------------------------");


const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2,b:3};
console.log(utility.deepEquality(first, second)); // false
console.log(utility.deepEquality(first, third)); // true


console.log("\nCount number of unique element in array");
console.log("-----------------------------------------");

const array = [1,2,3,4,2,4,3,1,5];
const Result1 = utility.uniqueElements(array);
console.log("Number of unique element in array is "+ Result1);
// Result will be 5


const array1 = ["a", "a", "b", "a", "b", "c","w"];
const Result2 = utility.uniqueElements(array1);
console.log("Number of unique element in array is "+ Result2);
// Result will be 4

console.log("\nCount each character in string");
console.log("-------------------------------");

const test = "Hello, the pie is in the oven";
const charMap = utility.countOfEachCharacterInString(test);
console.log(charMap);