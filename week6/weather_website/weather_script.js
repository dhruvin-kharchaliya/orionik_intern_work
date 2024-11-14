const apiKey = "7daf606496059733939a8b7494e81f50";
const weatherDataEle = document.querySelector(".waether-data");
const cityName = document.querySelector("#city-name");
const formEle = document.querySelector("form");
const imgIcon = document.querySelector(".icon");

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(cityName.value);

    // make variable that store the value of cityName 
    const cityValue = cityName.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
            throw new Error("Network Error  in code", response.statusText);
        }
        const data = await response.json();
        // console.log(data);
        const temprature = Math.floor(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        weatherDataEle.querySelector(".temp").textContent = `${temprature}°C`;
        weatherDataEle.querySelector(".desc").textContent = `${description}`;
        // icon.innerHTML = `https://openweathermap.org/img/wn/01d.png`
        let imagefile;
        if (description.includes("clear sky")) {
            imagefile = "./images/clearsky.webp";

        }
        else if (description.includes("rain")) {
            imagefile = "./images/rain_01.jpg";
        } else if (description.includes("fog")) {
            imagefile = "./images/fogy.jpg";
        } else if (description.includes("haze")) {
            imagefile = "./images/haze.jpeg";
        }
        else if (description.includes("smoke")) {
            imagefile = "./images/fogy.jpg";
        }
        else if (description.includes("broken clouds")) {
            imagefile = "./images/broken_cloude.jpg";
        }
        else if (description.includes("overcast clouds")) {
            imagefile = "./images/clude.jpg";
        }
        else if (description.includes("mist")) {
            imagefile = "./images/mist.jpg";
        }
        else if (description.includes("scattered clouds")) {
            imagefile = "./images/Scatared_cloude.jpg";
        }

        else {
            imagefile = "./images/default.png"; // fallback image if description doesn't match
        }
        let imageicon = document.querySelector('.icon img');
        imageicon.src = imagefile;

        const details=[
            `Feels like:${Math.floor(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed:${data.wind.speed}m/s`
        ];
        weatherDataEle.querySelector(".details").innerHTML=details.map((detail)=>{
 return `<div>${detail}</div>`;
        }).join("");
    }
    catch (error) {

    }
}