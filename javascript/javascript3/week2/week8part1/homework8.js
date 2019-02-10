//Create a function that has one parameter: millisecondsToResolve
function promiseCreation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('I am  called asynchronously');
           resolve() 

        }, 3000);
    })
   
    
}
console.log(promiseCreation());

promiseCreation()
.then((callingResolve) => callingResolve)  

//Exercise 2
//Fetch movies from  api
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then((response) => response.json())
.then((movies) => {
    console.log(movies);
     //Create an array called longMovieTitles. That contain only the titles of the long movies
    let longMovieTitles = [];
    longMovieTitles = movies.filter((movie) => movie.runningTime > 7000)
       console.log(movies.longMovieTitles);
       console.log(result.array.filter((movie) => movie.rating < 5)) // bad movies
       
 

})      

//Log out an array of bad movies
//Log out an array of bad movies since year 2000
//only log the titles of the bad movies since year 2000


const promise = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  .then((response) => response.json())
  .then((result) => {
    return {
      array: result, 
      longRunning: result.filter((movie) => movie.running_times > 7000)
    }
  })
  .then((result) => {
    console.log(result.longRunning)
    console.log(result.array.filter((movie) => movie.rating < 5)) // bad movies
    console.log(result.array.filter((movie) => movie.rating < 5 && movie.year >= 2000)) // bad movies since 2000
    console.log(result.array.filter((movie) => mmovie.rating < 5 && movie.year >= 2000).map((movie) => movie.title)) // bad movies since 2000 title
  });































//--------------------------
//Fetching and waiting
function fetchedData() {
    //Fetch some data from an api.
    return fetch('https://www.booknomads.com/api/v0/isbn/9789000035526')
    .then((response) => response.json())
    .then((data) => {
       setTimeout(() => {
           //wait 3 seconds and Log out the data from the api
           console.log(data);
       },3000);
       
})
    
}
console.log(fetchedData());


        




const isItMyPosition = true;  
function getMyPosition() {
    return new Promise((resolve, reject) => {
        
           
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                     resolve(position);
                })
           
               
            }else {
                reject('It is not my position');
            }
        
        

    });
}

getMyPosition() 
.then((returnMyPosition) => {
   console.log(returnMyPosition);
})
.catch((error) => {
    console.log(error);
})
