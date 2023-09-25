// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
    const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAge.filter((age) => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    return average;
    };

    const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

    console.log(avg1, avg2);
