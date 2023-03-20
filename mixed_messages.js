/*jshint esversion: 6 */
/* jshint node: true */
const questions = [
  "What can you tell me about yourself?",
  "Why do you want to work for us?",
  "How good are your leadership skills?",
  "What are your strengths?",
  "What are your weaknesses?",
  "Where do you see yourself in five years?",
  "What is your greatest achievement?",
  "Why should we hire you?",
  "Are you a team player?",
  "What are your salary expectations?",
];

const personalities = [
  "Taylor Swift",
  "The Rock",
  "Barack Obama",
  "Meryl Streep",
  "Jordi Pujol",
  "Ada Colau",
  "Batman",
  "Galadriel",
  "Buggs Bunny",
  "Rosalia",
];

const randomNumber = () => Math.floor(Math.random() * 10);

const getPersonalities = () => personalities[randomNumber()];

let newFamous = getPersonalities();

const answers = [
  `I play parchis with ${newFamous} and I almost always win`,
  `I have the strength of 10 ${newFamous}'s`,
  `I carved ${newFamous}'s face on a pumpkin`,
  `Looking at ${newFamous} face for an hour... that is my dream`,
  `${newFamous}, in the livingroom, with a crowbar`,
  `"Do or do not, there is no try" -${newFamous}`,
  `"I have a dream!" -${newFamous}`,
  `I love money more than ${newFamous}`,
  `I don't really like ${newFamous} and I'm tired of hidding it`,
  `I've been ${newFamous}'s grape peeler for 20 years! I think I deserve a raise!`,
];

const getQuestion = () => questions[randomNumber()];

const getAnswers = (famous) => answers[randomNumber()];

const createJoke = () => {
  let newQuestion = getQuestion();
  person = getPersonalities();
  let newAnswer = getAnswers(person);

  return `Interviewer: ${newQuestion} You: ${newAnswer}`;
};

createJoke();