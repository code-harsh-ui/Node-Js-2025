import https from "https";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "0776d5f0170534d75d20b3ec";
const url =
  "https://v6.exchangerate-api.com/v6/0776d5f0170534d75d20b3ec/latest/USD";

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
  let dataReceived = "";

  response.on("data", (chunk) => {
    dataReceived += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(dataReceived).conversion_rates;
    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question(
        "Enter the target currency (e.g, INR, EUR, NPR) : ",
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
  });
});
