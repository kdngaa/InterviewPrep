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
