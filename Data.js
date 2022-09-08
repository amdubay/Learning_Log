const cl = require('./Class.js')
const problems = []


const b1 = new cl.Problem(
    //Title: 
    "Even or Odd",

    // URL:
    "https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript", 

    // Instructions:
    "Create a function that takes an integer as an argument and returns Even for even numbers or Odd for odd numbers.",

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
    ["Ternary Operator"]

   )
problems.push(b1)

//console.log(b1)

//test to search for used logic examples
//const search = "Ternary Operator"

const locate  = search => {

for (i = 0; i < problems.length; i++) {
  //console.log("in i loop")
  let methods = problems[i].methods
  for (c = 0; c < methods.length; c++) {   
      if (methods[c] === search) {
        console.log("Match found! Problem that uses " + search + ":")
        console.log("Title: " + problems[i].title)
        console.log("Url: " + problems[i].url)
        console.log("Instructions: " + problems[i].instructions)
        console.log("My Solution: ")
        problems[i].mySolution()
        console.log("My solution is close, or matches best practice? " + problems[i].match)
        console.log("Best Practice Solution: ")
        problems[i].bestPractice()
        console.log("Related Methods/concepts: " + problems[i].methods)
      }
  } 
}
}

locate(process.argv[2])

