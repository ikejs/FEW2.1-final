const fetch = require("node-fetch");
const PI = 3.14159;


// multiply by the golden ratio
const multiplyByGoldenRatio = (num) => {
  return (num * 1.61803398875);
}

// convert degrees to radians
const degreesToRadians = (deg) => {
  return (deg * 3.14159) / 180;
}

// convert radians to degrees
const radiansToDegrees = (rad) => {
  return (rad * 180) / PI;
}

// convert number value to dollars string
const dollars = (num) => {
  return `$${num.toFixed(2)}`
}

// get random number between two numbers
const randomNum = (min, max) => {
  return Math.random() * (max - min) + min;
}

// convert string to pig latin
const toPigLatin = (str) => {
  const words = []
  str.split(" ").map((word) => {
    words.push(
      word.substring(1) + word.substring(0,1)
    );
  });
  return words.join(" ")
}

// convert weather data description to pig latin
const weatherDescToPigLatin = async (zip, OWM_API_KEY, units) => {
  const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${OWM_API_KEY}&units=${units}`)
    .then(res => res.json())
    .then(json => toPigLatin(
      json.weather[0].description
    ));
  return result;
}


module.exports = {
  multiplyByGoldenRatio,
  degreesToRadians,
  radiansToDegrees,
  dollars,
  randomNum,
  toPigLatin,
  weatherDescToPigLatin,
}