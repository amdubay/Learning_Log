const cl = require('./Class.js')
const data = require('./Data.js')

//console.log(data.problems)

//test to search for used logic examples
//const search = "Ternary Operator"

const locate  = search => {
    let count = 1;
    for (i = 0; i < data.problems.length; i++) {
      //console.log("in i loop")
      let met = data.problems[i].methods
      for (c = 0; c < met.length; c++) {   
          if (met[c] === search) {
            console.log(" ")
            console.log("************   " + (count) + ".   ************")
            console.log(" ")
            console.log("Match found! Problem that uses " + search + ":")
            console.log(" ")
            console.log("ID: " + data.problems[i].id)
            console.log(" ")
            console.log("Title: " + data.problems[i].title)
            console.log(" ")
            console.log("Url: " + data.problems[i].url)
            console.log(" ")
            console.log("Instructions: " + data.problems[i].instructions)
            console.log(" ")
            console.log("Test Code Used: ")
            data.problems[i].testCode()
            console.log(" ")
            console.log("My Solution: ")
            data.problems[i].mySolution()
            console.log(" ")
            console.log("My solution is close, or matches best practice? " + data.problems[i].match)
            console.log(" ")
            console.log("Best Practice Solution: ")
            data.problems[i].bestPractice()
            console.log(" ")
            console.log("Related Methods/concepts: " + met.join(", "))
            console.log(" ")
            count ++
          }
      } 
    }
    }

    locate(process.argv[2])