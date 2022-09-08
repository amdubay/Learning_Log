

class Problem {
        constructor(id, title, url, instructions, testCode, mySolution, match, bestPractice, comments, methods) {
          this._id = id;
          this._title = title;
          this._url = url;
          this._instructions = instructions;
          this._testCode = testCode;
          this._mySolution = mySolution;
          this._match = match;
          this._bestPractice = bestPractice;
          this._comments = comments;
          this._methods = methods;

        }
        get id() {
                return this._id;
        }
        get title() {
          return this._title;
        }
        get url() {
          return this._url;
        }
        get instructions() {
                return this._instructions;
        }
        get testCode() {
                return this._testCode;
        }
        get mySolution() {
                return this._mySolution;
        }
        get match() {
                return this._match;
        }
        get bestPractice() {
                return this._bestPractice;
        }
        get comments() {
                return this._comments;
        }
        get methods() {
                return this._methods;
        }

      }


module.exports.Problem = Problem;

/* Template for adding a new problem class

// *****************************

const --- = new cl.Problem(
        // ID:
        "",
       
        //Title: 
       "",

       // URL:
       "", 

       // Instructions:
       "",

       // The Test Code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
       function myFunction() {console.log(
        `
        describe("Sample tests",() => {
            
        it("2 is even", () => {
        assert.strictEqual(even_or_odd(2), "Even");`
         
         )},
        
        
        // My solution code *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
       function myFunction() {console.log(
        `
        function even_or_odd(number) {
         return number % 2 ? "Odd" : "Even" }`
         
         )},



       // Does my solution match the best-practice solution, or otherwise better solutions?
       "", 


       // If #7 is 'No', copy of best-practice solution code. If available
       // *** (Insert code after the console.log(`   but before the closing `)}, *** Delete all 'placeholder' code in between.
       function bestFunction() {console.log(
        `
        function even_or_odd(number) {
         return number % 2 ? "Odd" : "Even" }`
         
         )},
      

       //If #7 is 'No', Provide a comment/summary on the best-practice solution vs my solution.
             // Comments/Summary may include; Difference's and similarities between solutions, Functions, logic, modules, etc. that best-practice used, that I didn't 
             // and why it makes more sense to use them.

        "",

       // What logic is used in the best-practice/better solution code?
       [""]

      )
problems.push(---)

*/



