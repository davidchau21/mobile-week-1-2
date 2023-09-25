// Hints:
// § Use many different tools to solve these challenges, you can use the summary lecture to choose between them 
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
// Test data:

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  
  // 1. Calculate recommended food portion for each dog and add it as a new property
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // 2. Find Sarah's dog and log whether it's eating too much or too little
  const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
  if (sarahDog) {
    if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
      console.log("Sarah's dog is eating too much!");
    } else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
      console.log("Sarah's dog is eating too little!");
    } else {
      console.log("Sarah's dog is eating an okay amount.");
    }
  }
  
  // 3. Create arrays of owners whose dogs eat too much or too little
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
    .flatMap(dog => dog.owners);
  
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
    .flatMap(dog => dog.owners);
  
  // 4. Log strings for owners of dogs eating too much or too little
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // 5. Check if any dog is eating exactly the recommended amount
  const isAnyDogEatingRecommended = dogs.some(
    dog => dog.curFood === dog.recommendedFood
  );
  console.log(`Any dog eating recommended amount? ${isAnyDogEatingRecommended}`);
  
  // 6. Check if any dog is eating an okay amount
  const isAnyDogEatingOkay = dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
  console.log(`Any dog eating an okay amount? ${isAnyDogEatingOkay}`);
  
  // 7. Create an array of dogs eating an okay amount
  const dogsEatingOkay = dogs.filter(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
  
  // 8. Create a shallow copy of 'dogs' array and sort it by recommended food portion
  const dogsCopySorted = [...dogs].sort(
    (a, b) => a.recommendedFood - b.recommendedFood
  );
  
  console.log(dogsCopySorted);
  
