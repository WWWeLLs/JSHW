//JSHW - PRACTICE JS CONCEPTS

//VARIABLE OF DIFFERENT DATA TYPES (STRINGS, NUMBERS, BOOLEANS)
//Action - Prints String (Wennona Wells JSHomework) to the console
console.log('Wennona Wells JSHomework');

var mother = 'Jane'
var father = 'Jack'

console.log(mother, father);


//PRINTING TO THE CONSOLE
let mother2 = 'Mothers';
let father2 = 'Fathers';
const eventHappy = 'Happy';
const eventDay  = 'Day';

console.log(eventHappy, mother2, eventDay, mother);
console.log(eventHappy, father2, eventDay,father);


//EQUATIONS
let number1 = 3; // The number 3 is a whole number as Integer
let number2 = 56;

let number3 = 2.4;  // The numbers in decimal format as Float
let number4 = 59.3;

let equation1 = number3 + number4; //Combining variable equation values
console.log(equation1);

console.log('21'); //String
console.log(number4); //Integer

console.log(mother); //The value of the Variable non quotes (mother) will be printed
console.log('Jack'); //The 'String with quotes word' Jack will be printed


//ARRAYS//
let groceryList = ['Eggs','Milk','Honey' ];
let numlist = [1,2,3,4];

console.log(groceryList, numlist);


//ARRAYS WITH for LOOPS
/*Loop through list Explained.  for x = 0. x is a temporary variable. x has to be less
than zero while it iterates. Each time x iterates it gains +1. Per each additional action of
iteraton x will gain +1. Loop again now x=1. Loop again now x=2. Loop again now x=3..*/

//groceryList.length = the number of items listed, currently 3. Eggs Milk Honey.

//x must be less than 3 in order for the loop to occur.

/* Once x iterations has reached the same number of items amount listed in groceryList, currently 3
//then the loop iterations stop. */ 

for (let x = 0; x < groceryList.length; x++)
{
console.log(x);
console.log(groceryList[x]);
}
//1st position prints as 0, 2nd position then 1, 3rd position then 2.
// 0 1 2
//index 1st position is alwayS 0. 
//0 1st positon Eggs , Loop x +1
//1 2nd position Milk, Loop x +2
//2 3rd position Honey, Loop stop after 2 index, before 3 index.
//{ anything in brackets will get executed}


//Arrays forEach Loops *NEW WAY*
//forEach Loop is iterating through each item in the groceryList
groceryList.forEach
(grocery =>  { console.log(grocery);})


//ARRAYS FUNCTIONS .PUSH .SPLICE .REVERSE

var codecampsupplyList = ['Laptop', 'Pen', 'Codebook', 'Snacks','Backpack'];
console.log(codecampsupplyList);


//REVERSE
codecampsupplyList.reverse();
console.log(codecampsupplyList);


//PUSH *REMEMBER TO USE () TO PUSH ITEM ,INSTEAD OF []
codecampsupplyList.push('iPhone');
console.log(codecampsupplyList);


//SPLICE *AT POSITION 1, ADD NEW ITEM 'SHARPIE' , REMOVE 1 ITEM 'PEN'
codecampsupplyList.splice(1,1,'Sharpie'); 
console.log(codecampsupplyList);

//SPLICE PRINT CONSOLE START AT POSITION 2, BUT STOP AT POSITION 5. POSITION 6 DOESN'T EXIST 
console.log(codecampsupplyList.splice(2,6));


//STRING INTERPOLATION *REMEMBER TO USE `ACCENT FOR STRING INTERPOLATION
let Dateofyear = 12;
console.log(`Date is ${Dateofyear}`);
console.log(`Your favorite grocery list item is ${groceryList[2]}`);


//STRING CONCATENATION VARIABLES + STRING
console.log(mother + father);
console.log(eventHappy + mother2 + 'and' + eventHappy + father2 + eventDay);
console.log('Jane ' + 'Jack');


//RETRIEVING THE TYPE OF DATA A VARIABLE IS HOUSING
console.log(typeof mother2);
console.log(typeof mother);
console.log(typeof groceryList);
console.log(typeof number1);
console.log(typeof equation1);

//UPLOAD TO GITHUB 
