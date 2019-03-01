// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(first, second, callback){
  return callback(first, second);
}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(first, second){
  return first + second;
}

// add(17, 46, function(add){
//   console.log(add);
// })


function multiply(first, second){
  return first * second;
}

// multiply(17, 46, function(add){
//   console.log(add);
// })

function greeting(first, second){
  return `Hello ${first} ${second}, nice to meet you`;
}

// greeting('Billy', 'Bob', function(add){
//   console.log(add);
// })


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//  nestedfunction is INSIDE of my function, and due to the way things work, functions that are inside of other things can access what they are inside of as well as things that they are 'equal' to, global, and/or hoisted.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();