const {
  multiplyByGoldenRatio,
  degreesToRadians,
  radiansToDegrees,
  dollars,
  randomNum,
  weatherDescToPigLatin,
} = require("./index");

test("multiply number by the golden ratio", () => {
  expect(multiplyByGoldenRatio(3)).toBe(4.85410196625);
});

test("convert degrees to radians", () => {
  expect(degreesToRadians(90)).toBe(1.570795);
});

test("convert radians to degrees", () => {
  expect(radiansToDegrees(1.570795)).toBe(90);
});

test("convert number value to dollars string", () => {
  expect(dollars(4.50249246)).toBe("$4.50");
});

test("get random number between min and max", () => {
  const num = randomNum(0, 20)
  expect(num).toBeGreaterThanOrEqual(0);
  expect(num).toBeLessThanOrEqual(20);
});

test("response from openweathermap API", async () => {
  const pigLatinDesc = await weatherDescToPigLatin(
    54935, 
    "716d179c099dd2af686ac07d213ad216", 
    10
  );
  expect(pigLatinDesc.length).toBeGreaterThan(2);
});