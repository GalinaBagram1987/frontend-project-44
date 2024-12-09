import isRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGames = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const left = isRandomNumber();
  const right = isRandomNumber();
  const operators = ['+', '-', '*'];
  const multIndex = Math.floor(Math.random() * operators.length);
  const question = `${left} ${operators[multIndex]} ${right}`;
  const operator = operators[multIndex];

  let currentAnswer;
  switch (operator) {
    case '+':
      currentAnswer = left + right;
      break;
    case '-':
      currentAnswer = left - right;
      break;
    case '*':
      currentAnswer = left * right;
      break;
    default:
      throw new Error(`'Unsupported operator: '${operator}`);
  }
  return [question, String(currentAnswer)];
};

export const brainCalc = () => {
  playGame(questionGames, questionAndAnswer);
};
