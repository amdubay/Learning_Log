# Learning_Log
(Work in progress/formatting issues) This is a project I am building to make a log of completed coding challenges. 
The goal is to keep track of the challenge, how I solved it, and what the best practice is. 
Additionally, in the object created for each challenge, there is an array with methods or concepts that were valuable in solving the 
challenge OR, if the best-practice utilized them. (some info duplicated below. Need to refine this README)

Finally, I can search method/concept through each challenge object to see when it was used. (description will be refined later)


To clarify the action of each file >

Class.js creates a Problem Class constructor. This file also contains a template to copy/paste into Data.js to create a 'New Problem()'.

Data.js is all about creating new Problem Objects  Aside: (need to clarify if each 'New Problem()' is considered an Object)
  There are a few things that will not work in the current format, including, but not limited to:
      -Unable to use `` in test, solution, or best practice code.
      -Unable to use "" in strings for each different class constructor argument.
      
      The problem object includes a title, various solution codes, and most importantly (at this time), 'tags' of concepts/methods that were valuable in solving the 
      challenge OR, if the best-practice utilized them.
      
App.js - This is the file to initiate, built to run in Node.js. This file currently is built to search all Problem Objects for desired concept/method 'tag'.

        in command line: node App.js "type in tag to search"
        This will return information about problems that were solved with that tag. 
        The benefit here is that I can review other problems where this concept/method was used, as an aid to learning and programming.
        
        - Currently the input search argument is case-sensitive. argument needs to exactly match the 'tag'
        - Future revisions will include the ability to pass a 'help' arguement, and the ability to request a list of all 'tags' from all Problems.

