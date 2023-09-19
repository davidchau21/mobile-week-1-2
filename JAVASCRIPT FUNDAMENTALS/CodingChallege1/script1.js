// 1. Store Mark's and John's mass and height in variables

//Data 1
let markMassKg1 = 78; // Mark's mass in kilograms
let markHeightM1 = 1.69; // Mark's height in meters

let johnMassKg1 = 92; // John's mass in kilograms
let johnHeightM1 = 1.95; // John's height in meters

// data 2
let markMassKg2 = 95;
let markHeightM2 = 1.88;

let johnMassKg2 = 85;
let johnHeightM2 = 1.76;

// 2. Calculate both their BMIs using the formula
let markBMI1 = markMassKg1 / (markHeightM1 ** 2);
let johnBMI1 = johnMassKg1 / (johnHeightM1 ** 2);

let markBMI2 = markMassKg2 / (markHeightM2 ** 2);
let johnBMI2 = johnMassKg2 / (johnHeightM2 ** 2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;
// Display the results
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI1);

console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI2);