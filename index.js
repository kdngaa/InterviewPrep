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



//SMALLEST DIFFERENCE: MEDIUM
//Ask interviewer if you can SORT the arrays IN PLACE, if not, you'd have to allocate more memories by creating copies of the arrays and sort in from there
