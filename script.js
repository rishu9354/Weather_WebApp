const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const form = document.querySelector("#myForm");
// my openweather API KEY
const API_KEY = `ba002bd07806a228cd268ad0bf3f75b7`;

//  api call link
// https://api.openweathermap.org/data/3.0/weather?q=${ciity}&appid={API key}


// now get the weather data
const getData = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    weather.innerHTML = `<h2> Loading...</h2>`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return showData(data);
}

const showData = (data)=>{
    if(data.cod == "404"){
        weather.innerHTML = `<h2>${data.message}</h2>`;
        return;
    }
 weather.innerHTML = `
    <div>
         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="img1" >
     </div>

     <div>
        <h2>${data.main.temp} ℃</h2> 
        <h4>${data.weather[0].main}</h4>  
    </div>
 `;
 
}

// now we add event in form tag 
form.addEventListener("submit",function(event){
    console.log(search.value);
    getData(search.value);
    event.preventDefault();  // this preventDefault() will not reload the webpage but it can run all these command before you entered.

})