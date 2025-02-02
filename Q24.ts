
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

// • Test whether an item is not in a array


// equality and inequality
let string1: string= "Naeem"
let string2: string= "Raheel"
console.log(string1 === string2);
console.log(string1 !== string2);

//Tests using the lower case function
let mixedCaseString: string = "Naeem Warsi";
 console.log(mixedCaseString.toLowerCase() ==="naeem warsi")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1:number =10;
let num2:number =6;

console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)

// Tests using "and" and "or" operators
let condition1: boolean =true;
let condition2: boolean =false;
console.log(condition1 && condition2)
console.log(condition1 || condition2)

// Test whether an item is in a array
 const Fruits: string[] =["Mango","Orange","Banana","Melon"];
  console.log(Fruits.includes("Mango"))// true
  console.log(Fruits.includes("mango"))// false

// Test whether an item is not in a array
const friendNames: string[] = ["Naeem","Raheel","Umair","Meer"];
console.log(friendNames.includes("Naeem")) //true
console.log(friendNames.includes("Raheel")) // false


