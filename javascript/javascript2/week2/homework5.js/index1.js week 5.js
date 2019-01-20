//I created function with four argument

function fourArgument(startValue, slutValue, callThree, callFive) {
    let startValue = 0;
    let slutValue = 10;
    let creatArray = [ ];//This is my empty array to push start value and slut value
    for (var i = 0, i < startValue; i++ ) {
        for (var j = 0; j < slutValue-1; j++ ) {
            creatArray.push(startValue, slutValue, callThree, callFive);
      
        }
    }


}
//I created a function with argument callThree
function callThree(number) {
    if (number% 3 === 0) {
        return 'value is divisble by 3'
    }else {
        return 'It is can not be divisible by 3'
    }
    
}
//I created a function with argument callFive
function callFive(number) {
    if (number% 5 === 0){
        return 'value is divisible by 5'
    }else {
        return 'It is can not be divisible by 5'
    }
}

console.log(fourArgument(2, 3, callThree, callFive));
console.log(creatArray.length); //i am not sure if i can put length inside console.log

//add a button and input element
let myButton = document.getElementById('button').addEventListener('click', () => {
    let myInput = document.querySelector('.num').value;
    console.log('you clicked me!')
    if (myButton = clicked ) {
        alert('write a number')
    }else if (myInput % 3 === 0) {
        document.body.style.backgroundColor = "blue";
    } else if(myInput% 5=== 0) { 
        document.body.style.backgroundColor = "yellow";
    }else {
        document.body.style.backgroundColor = "white";
    }

    

  });
   //Create a button with text'show location
   let myNewButton = document.getElementById('.map').addEventListener('click', () => {
    let info = function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},//this is wrong key i tried to find it in(Google Cloud Platform)but it was not easy.
          zoom: 8
        });
   });

   //Create an array with 3 items. All items should be functions and call them

   theArrays = [
       array1 = function(){console.log('the first array')},
       array2 = function(){console.log('the second array')},
       array3 = function(){console.log('the third array')}
   ];

   console.log(theArrays);

   //Create a function as a const and try creating a function normally. Call both function
   const creatFunction1 = function() {
       console.log('This is the first function');
   }
   let creatFunction2 = function() {
      console.log('This the second function');
   };

   //Create an object that has a key whose value is a function. Try calling this function.
   let creatObject = {
       myKey: function() { alert('This is my object')}
   };
   creatObject.myKey();

   //Creat setTimeout uses a function that is defined as a const.
const mySetTimeout = function thisCode() {
    setTimeout("thisCode()", 2000);
}

// Creat an anonomous function that is defined inside the setTimeout.
   setTimeout(function(){"good job"},3000);

//Create a function (outer) that returns a function (inner)
function outer() {
    return function inner() {
        console.log("This is inner function");
    }
}
//Call the outer function and assign the return to a variable.
console.log(outer());
   