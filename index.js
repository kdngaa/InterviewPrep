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


//BINARY
//review class, constructor, and OOP
//depth first traversal, going deeper in the tree before moving laterally (right to left)
//stack: first in, last out (good for depth first traversal)
//breathd first traversal: going across before going deeper, still left to right
//using queue for breath first: like a line of people, things enter in the back of the queue and exits in the front of the queue, no one can skip line
//queue and stacks are used to travel through and check the tree, you don't often return it directly
//searching from left to right is very important
//iterative is better for breathed first traversal




//FRONTEND EXPERT
//Array Prototypes review (maps, filter, reduce, filter)
//json objects have name and value pairs of any type (string, number, boolean, array, objects(unordered)), name however are often strings
//json is used to transmit data between server and client
//fetch function produces a promise so we can use async and await as well as .then
//need to convert res to res.json to be able to access the object that carries the data/info when the fetch returns
//in order to post, put (specifgically) , you have to use the option section of the fetch method (after the url), which includes the headers (content type application json ) and body (**which has to be stringified from JSON**) and the method you intend to use



//STOP WATCH WITH JS HTML CSS
//review document.getElementById("")
//review document.addEventListener("click", *func*)
//review requestAnimationFrame and cancelAnimationFramt



//TODO LIST
//overview: user needs to be able to type in the input and add button is enabled, button is disabled if field is empty
//utilize "change" addEventListener
//pass in call back function when using document.addEventListener
//for the ADD button to work, you have to be able to click it for the item to be appended to a new list
//declaring input.value as an empty string will result in the input disapearring after it's being added, followed by the ADD button being disabled
//use createElement to actually create the list properties
//every item that is added will go in the order of HEADING first, then followed by an X as the delete button
//must add the CLICK event on the X button
//since we want to delete the actual item from the list, we must use this.parentNode since the item is the parent of the X button, hence it'll delete the whole item, the keyword "this" refers to the x button


//CRYPTO PRICES REACT MINI PROJECT WITH API
//declare a variable as a global scope with the API link you'd like to implement
//make sure the API is in JSON, as ARRAYS of OBJECTS
//create state for all the values in the API (useState), which includes the coins, the page the coins are on, and if there are a next page
//hasNext property is used to see if the API page has a next page
//whenever the page changes, the page has to make a request to the API, with the use of useEffect, passing in "page" as the dependency array, where the effect will take place when the page changes
//use searchParams when calling the url when you want to set the page in its default state (starting from page 0)
//in the fetch await function, after formatting the response is in json format, you must update the sate of coins and hasNext to whatever their value is based on the appointed API



//CREATING A MULTIPLE CHOICE QUIZ USING REACT AND API
//API returns an array as JSON (with each element if the array as objects), that includes the question, multiple choices, and the correct answer
//when dealing with API, the first step in react is to fetch all the data from that API
//since the API returns all the questions at once, we only need a single fetch calls using mount with useEffect
//when the task is to onmount, pass in empty array as the dependencies (since the api returns all the questions)
//whenever we mapped over an array in JSX, we always need a unique key
//add a useState for current question index in order to create a back and next button to rotate questions
//remember to pass in fetchData function directly inside useEffect after creating it in the useEffect




//LINUX RED HAT PREP COURSE
//Download Oracle Virtual Box
//Create new Virtual Machine with OVB
//Start the Virtual Machine, and check if the DVD (redhat img is intact, if not then download from linux redhat and attach it for it to run DVD)
//OPEN SOURCE code are developed in a decentralized and collaborative ways, which rely on peer review and community production
//Linux is a free, open source system
//Linux distribution is an operating system composed of Linux kernels, GNU tools, additional software and package manager
//Linux Redhad is a form of linux distribution, Ubuntu is Linux

//LINUX SYSTEM ACCESS (CommandLine and GUI)
//ifconfig to find out their IP Address
//ip addr is to look for IP Address
//enp0s3 is the name of the adapter




//STRESS
//MANAGE FILE SYSTEMS FROM THE COMMAND LINE
//File system used by an operating system to manage files. The system controls how data is saved or retrieved
//Think of file system like a clothing closet, where all your garments are stored in separate places
//Different files go to different places (system config files, user files, log files, commands of scripts)
//Improvements are always made with file systems as they are given different names (ext3, ext4, xfs, NTFS, FAT, etc)
//cd / is to change directory to the root directory and ls -l is to list file info
// in Linux everything starts from /
//etc is where config files go, home is where all users directory are located, opt is where the programs are running, and sbin is where commands and scripts are located, var is where your log files are located
//DIRECTORY LISTING ATTRIBUTES
//After ls -l, if file begins with d (directory), starts with l (link), starts with either l or d (regular file)
//In this order, TYPE, NUMBER OF LINKS, OWNER, GROUP, SIZE, MONTH, DAY, TIME, NAME
//when you cd into a file, you cd into the NAME of the file at the end
//whoami command shows youre logged in as
//pwd is to check the directory you are currently in


//CREATING FILES AND DIRECTORIES
//touch (creates an empty file), cp (copying an existing file and create new file with *insert name*, in that order when typing), vi (editor)
//mkdir (creating directory)
//you can check the file or directory you just created by ls -l, or ls -ltr (oldest to newest file modified)
//touch and mkdir work the same (you can create multiple files and/or directories in one line)
//make sure you check if you can create a file in that directory (it'll notifiy if you dont have permission, exp: root as the owner)




//FILE MAINTENANCE COMMANDS
//cp
//rm to remove a file
//mv to move location of a file to a diff location OR to rename a file
//mv(rename file) is mv *insert file u want change* *insert new name*
//mv(move file) is mv *insert file* /*insert file*
//mkdir
//rmdir or rm -r  to remove a directory  (rmdir or rm -m *insert directory*/) REMEMBER THE SLASH AT THE END
//chgrp  to change group level of a file (chgrp root *file name*) MAKE SURE U HAVE PERMISSION, check owner
//chown to change ownership of file (chown root *file name*) MAKE SURE U HAVE PERMISSION, check owner
//echo "INSERT STR WITH DOUBLE QUOTES" > *INSERT FILE* to add content inside that file
//man is to find out which command does what
//cat to see content inside the file
//to copy a file to a diff location you cp *insert file* /*insert directory name*
//su - is to change into ROOT and get ROOT's user rights



//SOFT AND HARD LINKS
//inode = Pointer or number of a file on the hard disk/ inode number is assigned to a file everytime it is created
//Soft link= Link will be removed if file is removed or renamed
//Hard link = Deleting renaming or moving the original file will not affect the hard link
//ln -s /home/kduong/*insert file*   ---> create soft links for that file in that directory
//ln /home/kduong/*insert file*  ---> create soft links for that file in that directory
//REMEMBER TO cd /tmp in order to cream links. NOTE that HARD LINKS can only be created in the same parition
//ls -li ----> find out the inode of that file


//INPUT AND OUTPUT REDIRECTS
//3 types of redirects in LINUX (standard input , standard output, standard error)
//stdin (has file descriptor number as 0)   --> KEYBOARD  <
//input is used to feeding file contents to a file
//stdout (has file descriptor number as 1)  --> SCREEN    > (>> for additional output)
//stderr (has file descriptor number as 2)
//ls -l > listings (redirecting to the FILE you want)
//when routing with ls -l  or pwd in addition to redirecting to a certain file, you wont see the output because it REDIRECTS underneath, use cat to check the content of that file
//hiden files are file names that have a dot infront of it
//if command produces an error on the screen its stderr, we can redirects to route errors from the screen
//^ this way we dont have to see the error but instead redirect it to the error file instead
//tellnet localhost 2> errorfile (shell scripting and automating tasks)



//PIPES
//A pipe is used by the shell to connect the output of one command directly to the input of another command.
//The symbol of pipe is a vertical bar |
//ls -ltr | more  --> puts the overloading file into pipes so you can view them easier (remember to be in the directory you want to view the files in)
//use SPACE BAR to browse the pages


//LINUX FILE EDITOR
//A text editor is a program which enables you to create and manipulate data in a Linux file
//Standard text editors available on Linux
//vi  - Visual Editor (CURRENTLY USING)
//ed - Standard Line Editor
//ex - Extended line editor
//emacs - Full screen editor
//pico - Beginner's editor
//vim - Advanced version of vi
//VI EDITOR
//vi supplies commands for: inserting and deleting texts, replacing texts, moving around the file, finding and substituting strings, cutting and pasting texts
//COMMON KEYS
//i - insert
//Esc - EScape out of any mode (need esp to get out of one state and move around)
//r - replace (need to go down the character one by one, type r then change the character)
//d - delete (removes the whole line)
//:q! - quit without saving
//:wq! - quit and save
//cat editor's name after you quit and save to view content that is saved within
//x - remove one character




//USER ACCOUNT MANAGEMENT
//COMMANDS
//in order to use these commands, you have to become root with su -
//useradd *insert new username*
//id *insert user* to verify if it's there
//groupadd *insert group name*
//cat /etc/group to check if group is there
//userdel *insert user name*
//userdel -r *insert user name* which will also delete the directory
//groupdel
//usermod -G *insert group* *insert name u want to add to that group*
//FILES
//   /etc/passwd
//  /etc/group
//  /etc/shadow (stricly to store passwords of users created, it shows the ENCODE passwords not real passwords)
//grep *insert user* /etc/passwd to show specific info for specific user
//user add -g superheroes -s /bin/bash -c "user description" -m -d /home/spiderman spiderman
//passwd *insert user name* to give them a password


//THE /etc/login.defs FILE is EXTREMELY IMPORTANT (setting user password day and age)



//SWITCH USERS AND SUDO ACCESS
//su - *insert user name if not root*         (switch from one user to another)
//sudo command (when you're not root but you still need some commands)
// /etc/sudoers  (configuration logs)
//when you are in root user, you're the most powerful user so you don't need any other permission or password
//visudo (add or remove the rights to certain commands), after entered command, scroll and look for #wheel, this is where you can add groups to give access to certain commands
//you must be in root user to access visudo
//look for "Allow root to run any commands anywhere" and enter the user name underneath root and replicate the attributes above
//usermod -aG wheel *insert user name* (to add that user into group's access)
//after that, you have to log into that user name and run the former locked commands with sudo *insert unlocked command*



//FILE PERMISSIONS
//UNIX is a multi user system. Every file and directory in ur account can be protected from or made accessible to other users by changing its access permissions
//3 types of permissions: read, write, and execute (running a program)
// each permission can be controlled on 3 levels (user, same group, others) U GO I in that order
//command to change permission: chmod
//exp: chmod g-w jerry (to remove this group's write permission from file jerry)
//exp: chmod a-r jerry (to remove ALL write permission from file jerry)
//exp: chmod u-w jerry (to remove my write permission from file jerry)
//to GIVE PERMISSION, instead of - (minus), use + (plus)


//FILE OWNERSHIP
//2 owners of file or directory (user and group)
//Commands to change file ownership: chown (changes ownership of file), chgrp (changes group ownership of file)
//exp: chown root lisa (change owner of the file lisa to "root")
//always log into root when you're granting access and permission user (you can change directories even when in root user)



//IMPORTANT: MONITOR AND MANAGE LINUX PROCESSES
//PROCESSES AND JOBS
//Application/Service (JFROG)
//Script (something that is written in a file and packaged that it will exceute like Apache)
//Process
//Daemon (something continously runs in the background)
//Threads (Every process could have multiple threads)
//Job (created by scheduler or work order)

//MONITOR AND MANAGE PROCESSES
//When an operating system boots up many programs get loaded into system memory. These processes or programs need to be managed and monitored bc they consume mainly 3 system resources like CPU, memory and disk space
//COMMANDS TO MANAGE SYSTEM RESOURCES
//df -h --> monitors and actually gives you statistics on your file system
//df -T --> gives you file system type
//du -h / | sort -nr | more   --> how much usage of the disk is being used in each file
//uptime --> how long the system has been up for
//top  (shows processes that are running, make sure you learn this)
//free (info about memory specifically)
//lsof (list open files) systems that are open that are interupting the runtime
//tcpdump (for network, which activity coming in or traffic coming out of the systems) //IMPORTANT FOR JFROG TROUBLESHOOTING
//netstat (also for network, what router, traffic in n out, gateway, etcc)
//ps - request of snapshot of the current process
//ps -ef | more(info about a specific process)
//kill -9 (to kill a process) use the PID number found in top command
//vmstat
//iostat
//iftop



//MANAGING NETWORK SECURITY (FIREWALL) ---> IMPORTANT
//Firewall: a wall that prevents the spread of fire
//When data moves in and out of a server its packet information is tested agaisnt the firewall rules to see if it should be allowed or not
//In simple words, a firewall is a watchman, or a bouncer that has set of rules that decide on who can enter or leave
//2 types of firewall in IT (software that runs on an OS or hardware with a firewall software)
//exp of firewall: server 1 wants to connect to server 2 either with SSH (port 22) or ftp (port 21) and if firewall allows those connections then they'll be able to connect
//Firewalld works the same way as iptables but it has its own commands
//firewall-cmd
//Firewalld has:
//Table (have info about chain, rules, targets)
//Chains (outgoing, incoming traffic info)
//Rules  (do the outgoing or incoming traffic match these rules)
//Targets (drop, reject, or accept target)

//RUNNING FIREWALL
//Can't run iptables or firewalld at the same time. Must turn off iptables if using firewalld
//systemctl stop iptables and systemctl diable iptables and systemctl mask iptables (IF U WANT TO USE FIREWALLD)
//check if firewalld package is installed (rpm -qa | grep firewalld)
//start firewalld (systemctl start/enable firewalld)
//check rule of firewalld (firewall-cmd --list-all) --> check if it's using ssh or ftp services and the port it allows
//get listings of all services firewalld is aware of (firewall-cmd --get-services)
//to make firewalld re-read the configuration added (firewall-cmd --reload)
//firewalld has multiple zones, to get list of all zones (firewall-cmd --get-zones), public zone is mostly used
//get list of all active zones (firewall-cmd --get-active-zones)
//firewall-cmd --zone=public --list-all
//All services are pre defined by firewalld, but if you add a 3rd party service

//IMPORTANT (TO ADD A SERVICE (HTTP))
//TO ADD A SERVICE (HTTP) firewall-cmd --add-service=http  (if remove just put remove)
//first run firewall-cmd --list-all to check what services ar running
//then if you don't see the service is running (check status), then run it with the systemctl unmask command
//to add it permanently without having to reload, run firewall-cmd --add-service=http --permanent (same with remove)

//TO ADD S SERVICE THAT IS NOT PRE DEFINED IN FIREWALLD
//STEP 1: go into /usr/lib/firewalld/services/allservices/xml
//STEP 2: cp ssh.xml sap.xml (ssh and sap are example)  -> to copy the file
//STEP 3: vi sap.xml (sap as example) -> to go into the file ediot and change the port or service as you wish
//STEP 4: run system restart firewalld to see the added service when running firewall-cmd --get-services
//STEP 5: now that you have defined the service, you have to add it with firewall-cmd --add-service=sap
//STEP 6: run firewall-cmd --list-all to view the changes in the rules with the added service included




//CONTROL SERVICES
//systemctl --version (check if systemd installed in your system)
//ps -ef | grep system (check if systemd is running)
//systemctl --all (check all running services)
//systemctl status|start|stop|restart (to check status, start, stop, or restart a service)
//systemctl reload application.service (reload configuration of a service)
//systemctl enable|disable *application*.service (enable or disable a service at boot time)
//systemctl mask|unmask *application*.service (enable or disable service completely)



//CONFIGURE AND SECURE SSH
//SSH: stands for secure shell (provides you w an interface to the linux system. It takes in your commands and translate them to kernel to manage hardware)
//Open SSH is a package/software


//ANALYZE AND STORE
//lIKE A DOCTOR'S LOG OF YOUR HEALTH HISTORY
//messages log (very important)


//COMPRESSING AND UNCOMPRESS FILES
















//JFROG ARTIFACTORY
//Artifact are readily deployable files
//JFROG Artifactory main purpose is to store artifacts (readily deployable code) and another is to act as a buffer for downloading dependencies for the build tools and languages
//First step: check whoami, and pwd for directory you're in, then ls -ltr to list all the files under that user
