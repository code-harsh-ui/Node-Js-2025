import https from "https";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let dataReceived = "";
    response.on("data", (chunk) => {
      dataReceived += chunk;
    });

    response.on("end", () => {
      const joke = JSON.parse(dataReceived);
      console.log(joke);
      console.log(`Here is a random ${joke.type} joke:`);
      console.log(`${joke.setup}`);
      console.log(`${joke.punchline}`);
    });

    response.on("error", (err) => {
      console.log(`Error fetching the joke ${err.message}`);
    });
  });
};

getJoke();
