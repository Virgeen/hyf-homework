
//I started from spirit animal becouse the first section i did it in week3.
//Create an input element, a button and a tag

let myInput = document.getElementById('input');
document.getElementById('input').addEventListener("click" , function() {
    document.getElementById("input").innerHTML = 'Virgeen'
})

const myButton = docuement.createElement('button');
document.body.appendChild('myButton');
document.querySelector('button').addEventListener('click', () => console.log('Virgeen: The rare lion'));

let myTag = document.createElement('div');
 let myInput = document.querySelector('input');
myButton = document.querySelector('button');
myTag.insertBefore(input, button);

//Create an array with 10 string representing spirit animals

let spiritAnimals = [
   'Dolphin', 'Oyster', 'Starfish', 'Bear', 'Hourse', 'Turtle', 'Shark', 'Shells', 'Crocodile', 'Snake'
];

// get a random item in the array that will represent the spirit animal.

var randomItem = spiritAnimals[Math.floor(Math.random()
    *spiritAnimals.length)];
document.body.innerHTML = randomItem;

//create functionality where a user can press a button and then get a new spirit animal.

document.getElementById('button').addEventListener('click',function(){
    const randomValue = Math.floor(Math.random* 10);
    document.getElementById.innerHTML = spiritAnimals[randomValue]

})