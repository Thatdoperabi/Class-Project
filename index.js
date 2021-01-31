let trainingProgramName = "Little Green Men";
const input = require('readline-sync');
let askCandidateName = input.question("Hello, thank you for your interest in the " + trainingProgramName + " program,\n What should we call you? ");
console.log("\nWelcome " + askCandidateName + ", We have some questions to help us find the best candidates for the job");

console.log(`\nCandidate Name: ${askCandidateName}`)

let questionsArray = [
  "1)Who was the first American woman in space? " ,
  "\n2)What is the minimum crew size for the International Space Station (ISS)? " ,
  "\n3)True or false: 5000 meters = 5 kilometers. " ,
  "\n4)(5 + 3)/2 * 10 = ? " ,
  "\n5)Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "
];


let answersArray = [
  "sally ride" ,
  "3" ,
  "true" ,
  "40" ,
  "trajectory"
];




let score = 0
let numQuestions = 5
let candidateAnswer = []
  for (let i = 0; i < 5; i++) {
  candidateAnswer.push(input.question(questionsArray[i]))

candidateAnswer[i] = candidateAnswer[i].toLowerCase()

if (candidateAnswer[i] === answersArray[i]) {
  console.log("Your Answer: " +  candidateAnswer[i])
  console.log("Correct Answer: " +  answersArray[i])
  score += 1;
}
  else {
   console.log("Your Answer: " +  candidateAnswer[i])
   console.log("Correct Answer: " +  answersArray[i])
  }
  }


    let percent = (score/numQuestions) * 100;



console.log(`\n>>> Overall Grade: ${percent}%  (${score} of 5 responses correct) <<<`)

if (percent < 60) {
  console.log(">>> Status: FAILED <<<")
}
else {
  console.log(">>> Status: PASSED <<<")
}
