/* Global Variables */
let baseUrl     = 'https://api.openweathermap.org/data/2.5/forecast?zip=',
    key         = '&appid=bd0b9a880eb0c31cb72b42899f7165b0',
    generateBtn = document.querySelector("#generate"),
    dateDiv     = document.querySelector("#date"),
    cityDiv     = document.querySelector("#city"),
    tempDiv     = document.querySelector("#temp"),
    contentDiv  = document.querySelector("#content"),
    holderEntry = document.querySelector(".holder.entry"),
    // Create a new date instance dynamically
    date        = new Date(),
    newDate     = date.getMonth() + 1 + '.'+ date.getDate()+'.'+ date.getFullYear();

// When clicking on the generate button
generateBtn.addEventListener("click", generate)

// generate clalback function when clicking on the generate button
function generate(e) {
    e.preventDefault();
    const ZIP      = document.querySelector("#zip").value.trim();
    const FEELINGS = document.querySelector("#feelings").value.trim();

    // Call the getWeather function to get data by API key
    getWeather(baseUrl, ZIP, key)
        .then((data) => {
            console.log(data);
            // Call the postData function to add data to the post route
            postData('/add', {date: newDate, city: data.city.name, temp: data.list[0].main.temp, content: FEELINGS});

            // Call the updateUI function to generate the UI
            updateUI();
        });
}

// getWeather function to get data by API key
let getWeather = async(url, zip, key) => {
    let result = await fetch(url + zip + key)
    try {
        let data = await result.json();
        return data;
    } catch(error) {
        console.log("error in fetching data", error);
    }
}

// postData function to add data to the post route
let postData = async(url = '', data = {}) => {
    let request = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
    });
    try {
        let newData = await request.json();
        return newData;
    } catch(error) {
        console.log("error in posting new data", error);
    }
}

// updateUI function to generate UI
let updateUI = async() => {
    let response = await fetch('/all');
    try {
        let allData = await response.json();
        holderEntry.style.display = "block";
        dateDiv.innerHTML    = `Date: ${allData[0].date}`;
        cityDiv.innerHTML    = `City: ${allData[0].city}`;
        tempDiv.innerHTML    = `Temp: ${allData[0].temp} C`;
        contentDiv.innerHTML = `You Feel: ${allData[0].content}`;
    } catch(error) {
        console.log("error in updating ui", error);
    }
}