# [weatherApp.js](../../../miniProjects/weatherApp/weatherApp.js) Documentation

## <p style="color:deepskyblue;">What is happening here?</p>

- This Node.js script takes a city name from the user. fetches live weather data from the **OpenWeatherMap API** and displays:

  - City name
  - Temperature
  - Weather description
  - Humidity
  - Wind speed

- It uses:
  - `readline/promises`: to take user input using async/await syntax.
  - `fetch`: to make API requests.
  - `async/await`: for cleaner asynchronous handling.

### <p style="color:coral;">Importing Required Modules</p>

```js
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
```

#### Explanation:

- `realine/promises` : let use use `await rl.question()` instead of callbacks.
- `input` and `output` are imported from `process` to connect to the terminal.
- Makes the code modern and cleaner with async and functions.

### <p style="color:coral;">Defining the API Information</p>

```js
const apiKey = "538ea429aa3eedd1090033b4f191b8dd";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
```

#### Explanation:

- `apikey`: your unique key to access the OpenWeatherMap API.
- `BASE_URL`: the correct API endpoint to fetch current weather data.

\*\*This endpoint returns JSON data containing temperature weather condition, humidity and more.

### Example API Request:

```bash
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

### <p style="color:coral;">Creating the Readline Interface</p>

```js
const rl = readline.createInterface({ input, output });
```

### <p style="color:coral;">`getWeather` Function</p>

```js
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
```

<p style="color:yellow; font-size:1.7rem; font-weight:bold;">Step-by-Step Explanation:</p>

### Step 1: Building the Request URL

```js
const url = `${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;
```

- Combines
  - Base API URL
  - User-entered city
  - API key
  - Unit system (`metric` = Celsius)

#### Example URL

```bash
https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=538ea429aa3eedd1090033b4f191b8dd&units=metric
```

### Step 2: Fetching Weather Data

```js
const response = await fetch(url);
```

- Sends the asynchronous **GET request to the API**.
- Waits until the data is received before moving on.

#### If the city is invalid:

```js
if (!response.ok) {
  throw new Error("❌ City not found. Please check the city name.");
}
```

- `response.ok` checks whether the request succeeded.
- Throws an error if the city name is incorrect.

### Step 3: Parsing the JSON Response

```js
const weatherData = await response.json();
```

- Converts the JSON text into a JS object you can work with.

### Example:

```js
{
  name: "Patna",
  main: { temp: 27, humidity: 61 },
  weather: [{ description: "clear sky" }],
  wind: { speed: 2.7 }
}
```

### Step 4: Displaying the results

```js
console.log("\n🌤️ Weather Information:");
console.log(`City: ${weatherData.name}`);
console.log(`Temperature: ${weatherData.main.temp}°C`);
console.log(`Description: ${weatherData.weather[0].description}`);
console.log(`Humidity: ${weatherData.main.humidity}%`);
console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
```

#### Output:

```txt
🌤️ Weather Information:
City: Patna
Temperature: 27°C
Description: clear sky
Humidity: 61%
Wind Speed: 2.7 m/s
```

### Step 5: Handling Errors Gracefully

```js
catch (error) {
  console.error("⚠️ Error:", error.message);
}
```

- If the user types a wrong city name or if thers's a network issue, you'll see

```txt
⚠️ Error: ❌ City not found. Please check the city name.
```

### <p style="color:coral;">Asking for City Name and running the Program</p>

```js
const city = await rl.question("Enter a city name to get its weather: ");
await getWeather(city);

rl.close();
```

#### Explanation:

- `await rl.question`: Asks user input asynchronously.
- Passes the entered city to `getWeather(city)`.
- Finally closes the `readline` interface with `rl.close`.
