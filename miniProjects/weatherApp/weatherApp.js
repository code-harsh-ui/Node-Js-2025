import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const apiKey = "538ea429aa3eedd1090033b4f191b8dd";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"; // ✅ Correct endpoint

const rl = readline.createInterface({ input, output });

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("❌ City not found. Please check the city name.");
    }

    const weatherData = await response.json();

    console.log("\n🌤️ Weather Information:");
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
  } catch (error) {
    console.error("⚠️ Error:", error.message);
  }
};

const city = await rl.question("Enter a city name to get its weather: ");
await getWeather(city);

rl.close();
