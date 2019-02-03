//Find a cool api and explain how it works and what kind of json data the api responds with.
fetch('http://www.boredapi.com/api/activity?key=5881028')
.then(response => response.json())
.then((active) => {
    console.log(active);
    console.log(active.key);
    console.log(active.price,' ' ,active.type);

}); 

//create weather app based on user location
//let url='https://api.openweathermap.org/data/2.5/weather?q=copenhagen&APPID=a5f5a9ca4a2951ba85f18383a047b718'
fetch('https://api.openweathermap.org/data/2.5/weather?q=copenhagen&APPID=a5f5a9ca4a2951ba85f18383a047b718')
.then((response) =>response.json())
.then((data) => {
    console.log(data);
})

//Fetch weather data from a city

let myInput = document.querySelector('#input');
let cityName = function() {
    return myInput.value; 
}   
let myButton = document.querySelector('#txt').addEventListener('click', () => {
    
    if(cityName != " ") {
        getCityWeather();
    }else {
        return "Enter City Name";
    }
    
    
});

//call getCityWeather()
function getCityWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=metric' + '&APPID=a5f5a9ca4a2951ba85f18383a047b718')
  .then((response) => response.json())
  .then((cityWeather) => {
      console.log(cityWeather);
  

})
}


