// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

document.getElementById('convert-button').addEventListener('click', function () {
    const textArea = document.getElementById('text-input');
    const outputDiv = document.getElementById('output');
    const variableNames = textArea.value.split('\n');

    variableNames.forEach(function (variableName) {
        const words = variableName.split('_');
        let camelCaseName = words[0];

        for (let i = 1; i < words.length; i++) {
            camelCaseName += words[i][0].toUpperCase() + words[i].slice(1);
        }

        const checkmarks = '✅'.repeat(words.length - 1);

        const result = `${camelCaseName} ${checkmarks}`;
        outputDiv.innerHTML += result + '<br>';
    });
});

