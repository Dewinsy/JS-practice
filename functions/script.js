console.log("hello there...");
//let name  = prompt("What's your name?");
//alert("Welcome" + name); 

/*name is crossed out by JS coz it used
 to be used as a keyword but this is not the case anymore. 
 Thereforre, we can name our variables with the word 'name'.
*/

//functions help in re-using your code: no need to repeat the code.

function favouriteAnimal(animal){
    //alert("A " + animal + " is my favourite animal");
    //using string literals to concatenate:
    //alert(`A ${animal} is my favourite animal`);

}
favouriteAnimal("Zebra");


function add(num1,num2){
    alert (num1 + " + " + num2 + " = " + (num1 + num2)); //concatenation with '+'
}

function subtract(num1,num2){
    alert (`${num1} - ${num2} =  ${num1 - num2}`); //using template literals
}

function multiply(num1,num2){
    alert (`${num1} x ${num2} = ${num1 * num2}`);
}

//arrow functions:
(num1,num2)=>alert (`${num1} ÷ ${num2} = ${num1 / num2}`);


add(2,4);
subtract(2,4);
multiply(2,4);
//divide(2,4);


/*

// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;



*/

