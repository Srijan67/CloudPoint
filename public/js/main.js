const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const tempVal = document.querySelector(".temp_val");
const curTemp = document.querySelector(".cur_temp");
const givenCity = document.querySelector(".city_given");
const temp_status = document.querySelector(".weatherIcon");
// console.log(cityName.value);
const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;
  //   console.log(cityVal);
  if (cityVal === "") {
    givenCity.innerText = `plz, type a proper city name here.`;
    temp_status.innerHTML = "";
    tempVal.innerText = "- -";
  } else {
    // givenCity.innerText = cityVal;
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ccfba2b713eae4c8dab484382ba747af`;
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      const arrData = [data];
      tempVal.innerText = `${arrData[0].main.temp}`;
      const tempMood = arrData[0].weather[0].main;
      //   console.log(tempMood);
      givenCity.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      //condition to check sunny or cloudy
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: lightblue;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:lightblue;'></i>";
      }
      cityVal = "";
    } catch {
      cityVal = "";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
