import { runGame } from '../index.js';

const mathOperations = ['+', '-', '*'];

const findRightAnswer = (number1, number2, mathOperation) => {
  let rightAnswer;
  switch (mathOperation) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    case '*':
      rightAnswer = number1 * number2;
      break;
    default:
      break;
  }
  return rightAnswer;
};

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const generateData = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const randomMathOperationIndex = Math.floor(Math.random() * mathOperations.length);
  const randomMathOperation = mathOperations[randomMathOperationIndex];
  const questionData = `${randomNumber1} ${randomMathOperation} ${randomNumber2}`;
  const rightAnswer = findRightAnswer(randomNumber1, randomNumber2, randomMathOperation);
  return { questionData, rightAnswer };
};

const runCalcGame = () => {
  const message = 'What is the result of the expression?';
  runGame(message, generateData);
};

export default runCalcGame;
