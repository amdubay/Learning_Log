# Learning_Log
Introduction:
This project is a running log of completed coding challenges. It is meant as learning aid.
The goal is to keep track of the challenge, how I solved it, and what the best practice is. 
Additionally, in the object created for each challenge, there is an array with methods or concepts that were valuable in solving the 
challenge or were discovered by reviewing the best-practice solution.


Details:
To clarify the action of each file >

Class.js creates a Problem Class constructor. This file also contains a template to copy/paste into Data.js to create a 'New Problem()'.

Data.js is all about creating new Problem Objects 
  There are a few things that will not work in the current format, including, but not limited to:
      -Unable to use `` in test, solution, or best practice code.
      -Unable to use "" in strings for each different class constructor argument.
      
      The problem object includes a title, various solution codes, and most importantly, 'tags' (as mentioned in the introduction) of concepts/methods that were valuable in solving the challenge or were discovered by reviewing the best-practice solution.
      
App.js - This is the file to initiate, built to run in Node.js. This file currently is built to search all Problem Objects for desired concept/method 'tag'.

        in command line: node App.js "type in tag to search"
        This will return information about problems that were solved with that tag. 
        The benefit here is that I can review other problems where this concept/method was used as an aid to learning and programming.
        
        - Currently the input search argument is case-sensitive. argument needs to exactly match the 'tag'
        - Future revisions will include the ability to pass a 'help' arguement, and the ability to request a list of all 'tags' from all Problems.

-Future revisions overall (in addition to the revisions mentioned specifically to App.js) are:
        - Set up a database to contain the Data, instead of using a Data.js file. Since the original writing of this README(9/8/2022), I have learned the basics of using an SQL database, including accessing the database, tables, and fields from within a JavaScript file via node. I will create an issue on the repository to add this feature.
        - In the interim, prior to setting up a database, I may opt to create a 'template' function. Whereby, instead of copy/pasting the template and editing directly in the data.js file, I'd be walked through the process (like a 'wizard'), and it will output the 'New Problem()' code, at which point, I just copy/paste to the Data.js file. (9/30/2022: per above note regarding SQL, I will not be exploring this interim step. However, I will keep this note here until the database is implemented.)
