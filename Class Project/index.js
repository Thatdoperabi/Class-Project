let trainingProgramName = "Little Green Men";
const input = require('readline-sync');
let askCandidateName = input.question("Hello, thank you for your interest in the " + trainingProgramName + " program,\n What should we call you? ");
console.log("\nWelcome " + askCandidateName + ", We have some questions to help us find the best candidates for the job");



let questionsArray = [
  "\nWho was the first American woman in space? " ,
  "\nWhat is the minimum crew size for the International Space Station (ISS)?" ,
  "\nTrue or false: 5000 meters = 5 kilometers." ,
  "\n(5 + 3)/2 * 10 = ?" ,
  "\nGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?"
];


let answersArray = [
  "sally ride" ,
  "3" ,
  "True" ,
  "40" ,
  "Trajectory"
];



let candidateAnswer = input.question(questionsArray[0]);



if (candidateAnswer.toLowerCase() === answersArray[0].toLowerCase()) {
  console.log(`That is correct, good job   ${askCandidateName}`)
}
  else {
    console.log("You are a disgrace")
  }
