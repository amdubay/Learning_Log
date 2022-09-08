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


    // The Test Code
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


    // My solution code
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

 // The Test Code
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
  
  
  // My solution code
 function myFunction() {console.log(
  `
  function findNeedle(haystack) {
    return "found the needle at position + haystack.indexOf("needle", 0)}
      }`
   
   )},



 // Does my solution match the best-practice solution, or otherwise better solutions?
 "Yes", 


 // If #7 is 'No', copy of best-practice solution code. If available
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
 [".indexOf", "Testing"]

)
problems.push(b2)













//console.log(b1)

//test to search for used logic examples
//const search = "Ternary Operator"
/*    

This has been moved to App.js. Need to add more classes, and test below function in App.js, confirm no bugs, before removing from Data.js

const locate  = search => {

for (i = 0; i < problems.length; i++) {
  //console.log("in i loop")
  let methods = problems[i].methods
  for (c = 0; c < methods.length; c++) {   
      if (methods[c] === search) {
        console.log(" ")
        console.log("************   " + (c+1) + ".   ************")
        console.log(" ")
        console.log("Match found! Problem that uses " + search + ":")
        console.log(" ")
        console.log("Title: " + problems[i].title)
        console.log(" ")
        console.log("Url: " + problems[i].url)
        console.log(" ")
        console.log("Instructions: " + problems[i].instructions)
        console.log(" ")
        console.log("Test Code Used: ")
        problems[i].testCode()
        console.log(" ")
        console.log("My Solution: ")
        problems[i].mySolution()
        console.log(" ")
        console.log("My solution is close, or matches best practice? " + problems[i].match)
        console.log(" ")
        console.log("Best Practice Solution: ")
        problems[i].bestPractice()
        console.log(" ")
        console.log("Related Methods/concepts: " + problems[i].methods)
        console.log(" ")
      }
  } 
}
}

locate(process.argv[2])
*/

// This must remain at the end of the project.
module.exports.problems = problems;