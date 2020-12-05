class Fetch {
  async getCurrent(input) {
    const myKey = "6d9afe41348fdbc521e3363616d493de";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
