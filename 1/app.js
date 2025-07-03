const apiKey = "2be63a7dc6040ef838922e823b21c039";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox1 = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".submitButton");
const weatherIcon = document.querySelector(".mainP2 img");

document.querySelector(".mainP2 h2").innerHTML = "---";
document.querySelector(".mainP2 h1").innerHTML = "---";
document.querySelector(".mainP3 h1").innerHTML = "---";
document.querySelector(".mainP4 h1").innerHTML = "---";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 400) {
    const typed = searchBox.value.trim().toLowerCase();
    const match = cities.find((city) => city.toLowerCase() === typed);
    if (!match) {
      errorBox.textContent = "❌ City not found. Please try again.";
    } else {
      errorBox.textContent = "";
      suggestionsBox.innerHTML = "";
    }
  }
  if (response.status == 404) {
    const typed = searchBox.value.trim().toLowerCase();
    const match = cities.find((city) => city.toLowerCase() === typed);
    if (!match) {
      errorBox.textContent = "❌ City not found. Please try again.";
    } else {
      errorBox.textContent = "";
      suggestionsBox.innerHTML = "";
    }
  }

  var data = await response.json();

  console.log(data);
  document.querySelector(".mainP2 h2").innerHTML = data.name;
  document.querySelector(".mainP2 h1").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".mainP3 h1").innerHTML = data.main.humidity + "%";
  document.querySelector(".mainP4 h1").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./accets/cloudy-day.png";
  } else if (data.weather[0].main == "Sunny") {
    weatherIcon.src = "./accets/sun.png";
  } else if (data.weather[0].main == "clear") {
    weatherIcon.src = "./accets/cloudy.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./accets/rainy.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "./accets/snow.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./accets/drizling.png";
  } else if (data.weather[0].main == "Thunder Storm") {
    weatherIcon.src = "./accets/storm.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox1.value);
});

const cities = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "Dhaka",
  "Cairo",
  "Murree",
  "São Paulo",
  "Mexico City",
  "Beijing",
  "Mumbai",
  "Osaka",
  "Karachi",
  "Chongqing",
  "Istanbul",
  "Buenos Aires",
  "Kolkata",
  "Kinshasa",
  "Lagos",
  "Manila",
  "Tianjin",
  "Guangzhou",
  "Rio de Janeiro",
  "Lahore",
  "Bangalore",
  "Paris",
  "London",
  "Bogotá",
  "Jakarta",
  "Chennai",
  "Lima",
  "Bangkok",
  "Seoul",
  "Nagoya",
  "Hyderabad",
  "Chicago",
  "Tehran",
  "Wuhan",
  "Chengdu",
  "Nanjing",
  "Ho Chi Minh City",
  "Luanda",
  "Ahmedabad",
  "Kuala Lumpur",
  "New York",
  "Hangzhou",
  "Hong Kong",
  "Dongguan",
  "Foshan",
  "Riyadh",
  "Santiago",
  "Surat",
  "Baghdad",
  "Madrid",
  "Suzhou",
  "Pune",
  "Houston",
  "Dallas",
  "Toronto",
  "Dar es Salaam",
  "Miami",
  "Singapore",
  "Philadelphia",
  "Atlanta",
  "Khartoum",
  "Barcelona",
  "Washington, D.C.",
  "Belo Horizonte",
  "Alexandria",
  "Zhengzhou",
  "Jinan",
  "Melbourne",
  "Shenyang",
  "Rangoon",
  "Sydney",
  "Cape Town",
  "Hanoi",
  "Monterrey",
  "Addis Ababa",
  "Brasília",
  "Phoenix",
  "Abidjan",
  "Jeddah",
  "Ankara",
  "Los Angeles",
  "San Francisco",
  "Seattle",
  "Berlin",
  "Montreal",
  "Casablanca",
  "Medellín",
  "Naples",
  "Rome",
  "Doha",
  "Kanpur",
  "Quezon City",
  "Mashhad",
  "Izmir",
  "Jaipur",
  "Tashkent",
  "Lisbon",
  "Dubai",
  "Detroit",
  "Minneapolis",
  "Vienna",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Brussels",
  "Munich",
  "Frankfurt",
  "Hamburg",
  "Zurich",
  "Geneva",
  "Helsinki",
  "Dublin",
  "Edinburgh",
  "Glasgow",
  "Birmingham",
  "Manchester",
  "Leeds",
  "Bristol",
  "Porto",
  "Valencia",
  "Seville",
  "Palermo",
  "Milan",
  "Turin",
  "Venice",
  "Florence",
  "Bologna",
  "Genoa",
  "Athens",
  "Thessaloniki",
  "Antalya",
  "Tbilisi",
  "Yerevan",
  "Bucharest",
  "Budapest",
  "Prague",
  "Warsaw",
  "Kiev",
  "Moscow",
  "St. Petersburg",
  "Riga",
  "Tallinn",
  "Vilnius",
  "Baku",
  "Almaty",
  "Astana",
  "Kabul",
  "Islamabad",
  "Xi’an",
  "Shenzhen",
  "Yokohama",
  "Brisbane",
  "Auckland",
  "Wellington",
  "Johannesburg",
  "Durban",
  "Nairobi",
  "Accra",
  "Rabat",
  "Tunis",
  "Algiers",
  "Tripoli",
  "Boston",
  "San Diego",
  "Baltimore",
  "Vancouver",
  "Las Vegas",
  "Portland",
  "Denver",
  "San Jose",
  "Salt Lake City",
  "Havana",
  "Panama City",
  "Quito",
  "Caracas",
  "La Paz",
  "Reykjavik",
  "Luxembourg",
  "Ljubljana",
  "Colombo",
  "Multan",
  "Faisalabad",
  "Sialkot",
  "Patna",
  "Lucknow",
  "Amritsar",
  "Varanasi",
  "Indore",
  "Kanazawa",
  "Fukuoka",
  "Sendai",
  "Kobe",
  "Sapporo",
  "Busan",
  "Incheon",
  "Jeju",
  "Daegu",
  "Daejeon",
  "Adelaide",
  "Perth",
  "Canberra",
  "Gold Coast",
  "Hobart",
  "Lusaka",
  "Kampala",
  "Harare",
  "Bamako",
  "Banjul",
  "Abuja",
  "Gaborone",
  "Maputo",
  "Lilongwe",
  "Mogadishu",
  "Damascus",
  "Amman",
  "Beirut",
  "Basra",
  "Najaf",
  "Pakistan",
];

const searchBox = document.getElementById("searchBox");
const suggestionsBox = document.getElementById("suggestions");
const errorBox = document.getElementById("errorBox");

searchBox.addEventListener("input", () => {
  const input = searchBox.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";
  errorBox.textContent = "";

  if (input === "") return;

  const filtered = cities.filter((city) =>
    city.toLowerCase().startsWith(input)
  );

  filtered.forEach((city) => {
    const div = document.createElement("div");
    div.textContent = city;
    div.classList.add("suggestion-item");
    div.addEventListener("click", () => {
      searchBox.value = city;
      suggestionsBox.innerHTML = "";
      errorBox.textContent = "";
    });
    suggestionsBox.appendChild(div);
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== searchBox) suggestionsBox.innerHTML = "";
});

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const typed = searchBox.value.trim().toLowerCase();
    const match = cities.find((city) => city.toLowerCase() === typed);
    if (!match) {
      errorBox.textContent = "❌ City not found. Please try again.";
    } else {
      errorBox.textContent = "";
      suggestionsBox.innerHTML = "";
    }
  }
});
//   const duplicates = cities.filter((city, index) => cities.indexOf(city) !== index);
// console.log([...new Set(duplicates)]); // Shows duplicate names, if any

//   function checkCity() {
//     const input = document.getElementById("cityInput").value.trim();
//     const messageEl = document.getElementById("message");

//     // Case-insensitive check
//     const found = cities.some(city => city.toLowerCase() === input.toLowerCase());

//     if (found) {
//       messageEl.style.color = "green";
//       messageEl.textContent = "✅ City found!";
//     } else {
//       messageEl.style.color = "red";
//       messageEl.textContent = "❌ City not found. Please try again.";
//     }
//   }
