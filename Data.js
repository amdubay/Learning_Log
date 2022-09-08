const cl = require('./Class.js')
const problems = []




const b1 = new cl.Problem(
    // ID:
    "b1",

    //Title: 
    "Even or Odd",

    // URL:
    "https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript", 

    // Instructions:
    "Create a function that takes an integer as an argument and returns Even for even numbers or Odd for odd numbers.",


    // The Test Code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
    function myFunction() {console.log(
    `
    const chai = require('chai');
    const assert = chai.assert;

    describe("Sample tests",() => {
    
    it("2 is even", () => {
        assert.strictEqual(even_or_odd(2), "Even");
    });
    it("7 is odd", () => {
        assert.strictEqual(even_or_odd(7), "Odd");
    });
    it("-42 is even", () => {
        assert.strictEqual(even_or_odd(-42), "Even");
    });
    it("-7 is odd", () => {
        assert.strictEqual(even_or_odd(-7), "Odd");
    });
    it("0 is even", () => {
        assert.strictEqual(even_or_odd(0), "Even");
    });
    });`
      
      )},


    // My solution code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
    function myFunction() {console.log(
    `
    function even_or_odd(number) {
      if (number % 2 == 0) {
      return "Even" 
      } 
      else {return "Odd"} 
  
  }`
     
     )},



    // Does my solution match the best-practice solution, or otherwise better solutions?
    "No", 


    // If #7 is 'No', copy of best-practice solution code. If available
    // *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
    function bestFunction() {console.log(
     `
     function even_or_odd(number) {
      return number % 2 ? "Odd" : "Even"
  }`
      
      )},
   

    //If #7 is 'No', Provide a comment/summary on the best-practice solution vs my solution.
          // Comments/Summary may include; Difference's and similarities between solutions, Functions, logic, modules, etc. that best-practice used, that I didn't 
          // and why it makes more sense to use them.

     "Used Ternary Operator",

    // What logic is used in the best-practice/better solution code?
    ["Ternary Operator", "Testing"]

   )
problems.push(b1)


// *****************************

const b2 = new cl.Problem(
  // ID:
  "b2",
 
  //Title: 
 "A Needle in the Haystack",

 // URL:
 "https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript", 

 // Instructions:
 "Instructions: Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one needle. After your function finds the needle it should return a message (as a string) that says: found the needle at position  plus the index it found the needle",

 // The Test Code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function myFunction() {console.log(
  `
  describe("Tests", () => {
    it("test", () => {
    var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
    var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
    var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

    Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
    Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
    Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
    Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
        });
    });`
   
   )},
  
  
  // My solution code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function myFunction() {console.log(
  `
  function findNeedle(haystack) {
    return "found the needle at position + haystack.indexOf("needle", 0)}
      }`
   
   )},



 // Does my solution match the best-practice solution, or otherwise better solutions?
 "Yes", 


 // If #7 is 'No', copy of best-practice solution code. If available
 // *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function bestFunction() {console.log(
  `
  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
    }`
   
   )},


 //If #7 is 'No', Provide a comment/summary on the best-practice solution vs my solution.
       // Comments/Summary may include; Difference's and similarities between solutions, Functions, logic, modules, etc. that best-practice used, that I didn't 
       // and why it makes more sense to use them.

  "My solution mostly matched the best-practice solution. In operation, it is identical. However, I learned that the fromIndex, in Array.indexOf(searchElement, fromIndex) is not required, if set to 0.",

 // What logic is used in the best-practice/better solution code?
 [".indexOf", "Formatting", "Testing"]

)
problems.push(b2)


// *****************************

const b3 = new cl.Problem(
  // ID:
  "b3",
 
  //Title: 
 "Opposite number",

 // URL:
 "https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript", 

 // Instructions:
 "Very simple, given an integer or a floating-point number, find its opposite.",

 // The Test Code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function myFunction() {console.log(
  `
  const { assert } = require('chai');

  describe('Fixed tests', () => {
  it('Is it a function?', () => {
      assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
  });
  it('should return -1', () => {
      assert.strictEqual(opposite(1), -1);
  });
  it('should return 0', () => {
      assert.strictEqual(opposite(0), 0);
  });
  it('should return -4.25', () => {
      assert.strictEqual(opposite(4.25), -4.25);
  });
  it('should return -3.3333333', () => {
      assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it('should return 12525220.3325', () => {
      assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it('should return 5', () => {
      assert.strictEqual(opposite(-5), 5);
  });
  });`
   
   )},
  
  
  // My solution code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function myFunction() {console.log(
  `
  function opposite(number) {
    return number*(-1);
  }`
   
   )},



 // Does my solution match the best-practice solution, or otherwise better solutions?
 "Mostly", 


 // If #7 is 'No', copy of best-practice solution code. If available
 // *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function bestFunction() {console.log(
  `
  function opposite(number) {
    return(-number);
  }`
   
   )},


 //If #7 is 'No', Provide a comment/summary on the best-practice solution vs my solution.
       // Comments/Summary may include; Difference's and similarities between solutions, Functions, logic, modules, etc. that best-practice used, that I didn't 
       // and why it makes more sense to use them.

  "My solution mostly matched best-practice, but even when I thought I was finding a clean way to solve this very easy kata, was reminded there is an easier way. return(-number) vs number*(-1)",

 // What logic is used in the best-practice/better solution code?
 ["Formatting", "Operations", "Testing"]

)
problems.push(b3)


// *****************************

const b4 = new cl.Problem(
  // ID:
  "b4",
 
  //Title: 
 "Century From Year",

 // URL:
 "https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript", 

 // Instructions:
 "The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Task: Given a year, return the century it is in. Examples: 1705 --> 18; 1900 --> 19; 1601 --> 17; 2000 --> 20",

 // The Test Code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function myFunction() {console.log(
  `
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(century(1705), 18, 'Testing for year 1705');
  Test.assertEquals(century(1900), 19, 'Testing for year 1900');
  Test.assertEquals(century(1601), 17, 'Testing for year 1601');
  Test.assertEquals(century(2000), 20, 'Testing for year 2000');
  Test.assertEquals(century(89), 1, 'Testing for year 89');
      });
  });`
   
   )},
  
  
  // My solution code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function myFunction() {console.log(
  `
  function century(year) {
    return year.length == 2 ? 1 : Math.floor((year-1) / 100) +1
    }`
   
   )},



 // Does my solution match the best-practice solution, or otherwise better solutions?
 "No", 


 // If #7 is 'No', copy of best-practice solution code. If available
 // *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
 function bestFunction() {console.log(
  `
  function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }`
   
   )},


 //If #7 is 'No', Provide a comment/summary on the best-practice solution vs my solution.
       // Comments/Summary may include; Difference's and similarities between solutions, Functions, logic, modules, etc. that best-practice used, that I didn't 
       // and why it makes more sense to use them.

  "Rounding up to the nearest hundred would solve the issue of the 2 digit year. Where as I used a conditional for length == 2. Actually, I now realize that if one of the test years were 3 digit, such as the year 384, my solution would have failed.",

 // What logic is used in the best-practice/better solution code?
 ["Math", ".ceil", "Testing"]

)
problems.push(b4)









// This must remain at the end of the project.
module.exports.problems = problems;