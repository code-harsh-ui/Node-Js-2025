# [currencyConverter.js](../../../miniProjects/currencyConverter/currencyConverter.js) Documentation

## <p style="color:deepskyblue;">What is happening here?</p>

- This Node.js app lets user convert USD to any other currency using live exchange rates from an API.
- It uses:

  - `https`: to fetch currency data from the internet.
  - `readline`: to take user input (amount and target currency).
  - `JSON.parse()`: to convert API data into a Javascript object for use.

- Finally, it calculates the converted value and prints it in the terminal.

### <p style="color:coral;">Importing Required Modules</p>

```js
import https from "https";
import readline from "readline";
```

- `https`: Helps send GET requests to external APIs over HTTPS.
- `readline`: Lets you ask questions and get input directly from the terminal.

### <p style="color:coral;">Creating the Readline Interface</p>

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

- Connects your Node.js program to the terminal.

### <p style="color:coral;">Setting the API URL</p>

```js
const apiKey = "0776d5f0170534d75d20b3ec";
const url =
  "https://v6.exchangerate-api.com/v6/0776d5f0170534d75d20b3ec/latest/USD";
```

- This is the ExchangeRate API endpoint.

#### Example API response (shorthand):

```json
{
  "conversion_rates": {
    "INR": 83.25,
    "EUR": 0.92,
    "GBP": 0.78,
    "JPY": 151.45
  }
}
```

### <p style="color:coral;">Creating the Conversion</p>

```js
const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};
```

- Multiples the entered amount (in USD) with the target currency's rate.
- `toFixed(2)` ensures the result shows only **2 decimal places**.

#### Example:

```js
convertCurrency(100, 83.25); // returns "8325.00"
```

### <p style="color:coral;">Fetching Live Exchange Rates</p>

```js
https.get(url, (response) => {
  let dataReceived = "";

  response.on("data", (chunk) => {
    dataReceived += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(dataReceived).conversion_rates;
    ...
  });
});
```

#### Explanation:

- `https.get()`: sends a **GET request** to the **API**.
- `response.on("data")`: receives data in chunks (small pieces).
- All chunks are added to `dataReceived`.
- Once all data is received, the `"end"` event runs.

### <p style="color:coral;">Understanding the Chunk</p>

### Node.js receives each piece and keeps appending them:

| Step | Chunk Received                      | dataReceived So Far                                                     |
| ---- | ----------------------------------- | ----------------------------------------------------------------------- |
| 1    | `{"conversion_rates":{"INR":83.25,` | `{"conversion_rates":{"INR":83.25,`                                     |
| 2    | `"EUR":0.92,"JPY":151.45,`          | `{"conversion_rates":{"INR":83.25,"EUR":0.92,"JPY":151.45,`             |
| 3    | `"GBP":0.78}}`                      | `{"conversion_rates":{"INR":83.25,"EUR":0.92,"JPY":151.45,"GBP":0.78}}` |

- Finally, `dataReceived` becomes a complete JSON string that can be parsed.

### <p style="color:coral;">Asking the User for Input</p>

```js
rl.question("Enter the amount in USD: ", (amount) => {
  rl.question(
    "Enter the target currency (e.g, INR, EUR, NPR): ",
    (currency) => {
      const rate = rates[currency.toUpperCase()];
      if (rate) {
        console.log(
          `${amount} USD is approximately ${convertCurrency(
            amount,
            rate
          )} ${currency}`
        );
      } else {
        console.log("Invalid Currency Code");
      }
      rl.close();
    }
  );
});
```

### Step-by-Step:

- Ask for amount in USD.

- Ask for target currency (e.g., INR, EUR, GBP).

- Find that currency’s rate from the rates object.

- Multiply and display the converted value.

- Close the readline interface.

#### Example:

```txt
Enter the amount in USD: 100
Enter the target currency (e.g, INR, EUR, NPR): INR
100 USD is approximately 8325.00 INR
```

If you type a wrong currency code:

```txt
Enter the amount in USD: 50
Enter the target currency (e.g, INR, EUR, NPR): ABC
Invalid Currency Code
```

### <p style="color:coral;">Closing the input interface</p>

```js
rl.close();
```

`rl.close()` actually closes the input interface.
Without parentheses, it does nothing.
