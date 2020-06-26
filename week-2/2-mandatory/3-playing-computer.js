/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
     its because b as not defined 
  2. Remove the line that throws the error.
     the error was on console.log(b) now removed
  3. What is printed to the console?
    after removing the error code the output on the console is 2 6 4 9 6 13 8
  4. How many times is "f1" called? 
     Twice
  5. How many times is "f2" called?
     Three times
  6. What value does the "a" parameter take in the first "f1" call? 
     the value as 8
  7. What is the value of the "a" outer variable when "f1" is called for the first time?  
     it was 6
*/

let x = 2;
let a = 6;

const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);


for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

