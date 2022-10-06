//INTERVIEW TIPS AND TRICKS
//GO OVER FRONT END COURSES and SYSTEM DESIGN VIDEOS ON ALGO
//DETERMINE WHAT THE PROBLEM PRORITIZES BEFORE THINKING OF SOLUTIONS
//GO OVER EVERY DATA TYPES ARRAY, STRINGS, OBJECTS
//BIG O NOTATION IS simplified analysis of an algorithm's efficiency
// complexity in terms of input size N; can be used to analyze time and space
//big o ignores constant (exp: 5n --> O(n) n input doesnt matter when becomes large)
// O(1) is constant time
// linear time
//quadratic time
//(O1) is the most optimal
//FOCUSING ON THE WHY IN YOUR PROJECTS
//FOCUS ON ASSOCIATE OR INTERNSHIPS





//FRONTEND KNOWLEDGE:
//CLIENT (frontend) VS SERVER (backend), sometimes it's better to code on backend because the client side has a lower computing power
//sometimes it's better to code on the client side because users can actually see the code as it's not protected by passwords and that it's faster since it doesn't need to wait for requests
//client has to database access but server (backend) does
//STATUS CODES: 400'S are Client Errors (frontend), 500's are Server Errors (backend)
//401: unauthorized
//RESTful APIs are resource based (it's an interface where each programs agree to communicate with one another)
//RESTful APIs is resource-based and has 6 constraints
//HTTP requests are used to define the relationship (submit, update, delete, read) between the data to the server
//Web Security (Auth)
//Same-Origin Policy: Restricts scripts from interacting with resources from other origins (exp: http and https have different origins)
//Network requests can be made with same origin policy but responses won't be readable
//EXP: a banking website and a banking server (client and server) havea relationship, then the banking website is also somehow connected to a bad website
//Cont. exp: the bad website can also make GET requests to the banking server (same origin policy can block the bad website to read the response it gives back since it's from a different origin)
//Cont. exp: however, when the bad website make a POST requests pretending to the other website, which also includes cookies that confuse the server and the bad actor site doesn't need a response (transfer wire to steal information), this is a CSRF attack (Cross Site Request Forgery Attack)
//To prevent CSRF attacks, use Same Site Cookie Flag (doesn't include cookies cross origin)
//CSRF Tokens: when Client (bank) side send a request to Server (bank server), the Server send back Csrf Token (random numbers and letters)
//Cont. CSRF Tokens: now that the Csrf token is there, everytime a request is made from client, it'll carry the Csrf Token given to the server side, therefore the bad website (even with cookies) can't infiltrate the system due to Same Origin Policy
//In case we need our website to interact and sharing resources cross-origin (exp: APIs), we use CORS (Cross Origin Resource Sharing)
//Cont. CORS: CORS headers (Access-Allow-Control-Origin or Crendentials) are sent back along with responses FROM the server
//^^^ Access Allow Control Origin indicates another origin that can request the server (usually with an asterik), Access Allow Control Credentials indicates if credentials (TLS client certificate) should be sent cross origin
//Cont. CORS: preflight requests are test requests from the Client side to check what CORS header they get back
//Cross Site Scripting Attack (XSS): Attacker inject Javascript onto UI (Persistent: commenting script on website,Non-Persistent: google searches that includes a script at the end, DOM-based: link with virus code)
//OAUTH (Open Authorization): Give API access to other websites without passwords (EXP: you have a website and you want to create schedule or events based on YOUR personal Google calendar without giving them password acesss)
//Cont. OAUTH: Google Calendar will ask the User trust the devices (popups that ask asking for access to personal info), if User says yes, Google calendar will send a Token to your website
//Cont. OAUTH: Your website will then use the Token to make request speicifically for the action you allowed access to (create events)
//Cont. OAUTH: Examples would be (Sign in AlgoExpert or Leetcode with your Github account), your Github would only be requested the access needed ONLY to sign in Algo or Leetcode, nothing else is allowed
//JSON (Javascript Object Notation) WEB TOKEN: These are signed token, used to share security information between two parties — a client and a server
//Cont. JSON WEB TOKEN: comes w/ header that has info about encryption algorithm used, payload data, and signature created by the server using a secret key
//HOW DOES WEBSITES RENDER HTML AND CSS: HTML IS PARSED INTO DOM TREE, CSS IS PARSED INTO CSS OBJECT MODEL TREE, combine both to Render Tree (contain nodes of what elements are being rendered)
//Cont. Browser Render: Calculate layout, width, height, location of nodes based on view port size, then PAINT the screen using Render Tree and Layout Calculations



//POLYMORPHISM AND INHERITANCE AND ENCAPSULATION
//POLYMORPHISM: Poly means many, morph means form, ability to create a variable, function, or object that has more than one form
//Polymorphism exp: class Alligator extends class Animal, the child eat() function that is called latter will take presidence over the first eat() function
//Polymorphism is that in which we can perform a task in multiple forms or ways. It is applied to the functions or methods. Polymorphism allows the object to decide which form of the function to implement at compile-time as well as run-time.
//Whereas it is basically applied to functions or methods.
//Polymorphism allows the object to decide which form of the function to implement at compile-time (overloading) as well as run-time (overriding).

//INHERITANCE: Once you made a class, and you want a class to inherit a lot of properties and functions but modified with its own custom stuff, inheritance happens in something like a tree
//Inheritance is one in which a new class is created that inherits the properties of the already exist class. It supports the concept of code reusability and reduces the length of the code in object-oriented programming.
//It is basically applied to classes, often used for pattern designing



//REACT KNOWLEDGE
//Hooks are what you return when using states (exp: useState(0))
//useState are used to interact with DOM (or component) RE RENDERS, cannot be called conditionally, this is why hooks orders matter
//Reducer takes in an old state and an action
//Dependency array determines when the useEffect will run
//To avoid infinite loops in useEffect, try not to use something that constantly changes or updates
//Redux holds the state of the entire application, reducer specifies how the state changes depends on which action is dispatched into the store
//React Router maintains consistent structure and behavior and is used to develop single-page web applications, can contain many routes
//React Routing is faster than tradiational routing since it does not refresh since it's a single file, and the user navigates multiple views in the same file
//Hooks let you use state and other React features without writing a class.



//NODE JS USER AUTH SIMPLE (PASSWORD LOG IN)
//npm init -y to install dependencies like package.json
//npm i express bcrypt to secure password hashes
//npm i --savedev nodemon is a dev dependency, used to restart our server automatically everytime we make a change
//create server.js file to start up the server, creating routes (ie: app.get), app.listen(3000)
//get bcrypt library to hash passwords in server js file (create a salt and use the salt to hash the password)
//salt is different for every single user
//bcrypt is an async library so you can use try catch method
//genSalt() and hash() to generate salt for password and then hash
//use Postman to test request and response
//use bcrypt.compare to compare the original password to the hashed password, this increases security by preventing timing attacks, both passwords have to be the same



//SYSTEM DESIGN
//There are no wrong or right answers, but it's your job to defend your stance on why you would do something over something else
//System basics: Client Server model, Network Protocols (how they communicate with one another)
//When your Browser first try to type an address for a site (ie Algo Expert), it makes a DNS query behind the scene to figure out an IP address (unique identifier for a specific machine) of the site to learn how to communicate with the server
//Network Protocols: IP, TCP, HTTP
//Modern Internet runs on IP (Internet Protocol) IP packet is the fundamental data units that are used to sent information to different machines, made up of bytes
//JSON is a data format of the request bodies
//TCP "handshake" used to create a connection between machines, built on top of IP
//IP and TCP are low level but HTTP is much more relevant
//DATABASE STORAGE: databases are used to STORE and RETRIEVE data



//DOCKER OVERVIEW
//is a tool to run applications in a isolated environment
//advantage in running your app in a virtual machine
//PROS: Run consistently in same environment so it behaves the same
//PROS: Let you sandbox projects if you work on diff projects, good for security
//PROS: You can work it for someone else projects without installing dependencies
//Docker uses containers, containers arent virutal machines
//container runs fast and uses less memories
//Dockerfile contains a list of steps to perform to create that image,


//JAVA
//primitive type in Java (variables) are lowercased letters
//Sytem.out.println() is basically console.log
//String is a commonly used primitive type, uses double quote instead of single
//everything is done in the main method,
//CONCAT in Java is a +, any method after the main method doesn't have "main" in its name and call it private static (if you don't want it to be called everywhere)
//return is the same as JS
//IF CONDITIONALS is the same structure
//.equals() is to compare two strings in JAVA
//public classes can have attributes by using primitive types
//the static keyword purpose is so that you can use that specific method you declared in one class elsewhere (exp: meow)



//3 ways to copy an array
//SLICE (shallow, only allows pure array)
//let copyArray = og.slice(0)

//SPREAD OPERATOR (shallow, only allows pure array)
//let copyArray2 = [...og]

//DEEP COPY (if theres an array or object within the array)
//let deepCoy = JSON.parse(JSON.stringify(deepOriginal))




//// 2 Sum EASY
//BETTER WAY: HASH TABLES GIVES YOU MORE SPACE, makes it run faster and more efficiently (value time more than space)
//MOST OPTIMAL: USING SORT IN THE BEGINNING and using WHILE LOOP (value space more than time)
//REVIEW BIG-O, KNOWING HOW TO READ OPTIMAL SOLUTIONS IS A BIG PLUS
//REVIEW HASHMAPS AND HASH TABLES, SLIDING WINDOWS AND TWO POINTERS




///3 Sum MEDIUM
//Array manipulation, hash map and 3 for loops may work but will increase complexity and not optimal
//use left and right pointers
//sort the array in ascending order
//iterate once, have left pointer at 1 index, and right pointer at last index
//Current Sum = Curr Number + Left Pointer + Right Pointer
//Only move one pointer at a time (until the window is closed) since you want to test ALL possitibillities
//If the two pointers crosses each other, window is closed and iteration is done
//Because it is in ascending order, if the sum of the pointers are greater than the TARGET, then you move the right pointer to DECREASE the amount, vice versa, if it's less than target, then move left pointer until they area match
//Two pointers is one of the best strats for Array Manipulation. Time Complexity is O(n^2) because of for loop for the main array, and for each of those number as a curr number, a while loop is activated whenever we reset the current number
//O(N) space
//sorting method in the beginning wont mess with the overall runtime of the algo because On(log n) is less than O(N^2)
//has to be array.length - 2 because you want the first num to be the 3rd number from the end of the array, since we are looking for triples, we need the two other numbers (left n right pointers) after the curr number
//while left < right (before the cross eachother and the window (iteration) is closed)


//FRONTEND QUIZ
//Fetch function returns a promise object









//SMALLEST DIFFERENCE: MEDIUM
//Ask interviewer if you can SORT the arrays IN PLACE, if not, you'd have to allocate more memories by creating copies of the arrays and sort in from there
//TIME O(Nlog(n) + Mlog(n)) because we are sorting the area
//SPACE O(1) is because we're sorting it in place



//SPIRAL TRAVERSE MEDIUM (to be cont.)
//Must traverse through all parameters of the array
//Then traverse the inner parameter


//most frequent char
//declare the best character as null because you want it to return a character, not a number




//LINKEDLIST REVIEW
//linked list is an ordered data structure (head, tail, much like the train containers)
//linkedlist positions are the same as array's indices
//inserting an element into an array is harder than a linkedlist because it is O(n) time, since you have to shift around elements depending on the size
//to insert an element into linkledlist, you just have to determine the next and previous pointer of a certain position
//the node's inner values can be numbers or letters or strings
//to traverse through a linkedlist, we must update (re-assignment) the head as the current node everytime until current is equal to null
