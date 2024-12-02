import randomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGames = 'What is the result of the expression?';
export const generateQuestion = () => {
  const left = randomNumber();
  const right = randomNumber();
  const operators = ['+', '-', '*'];
  const j = Math.floor(Math.random() * operators.length);
  const question = `${left} ${operators[j]} ${right}`;
  return {
    question,
    left,
    right,
    operator: operators[j],
  };
};

const questionAndAnswer = () => {
  const {
    question,
    left,
    right,
    operator,
  } = generateQuestion();
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

const brainCalc = () => {
  playGame(questionGames, questionAndAnswer);
};
export { brainCalc };
