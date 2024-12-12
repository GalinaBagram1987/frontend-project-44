import getRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGames = 'What is the result of the expression?';

const calc = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const questionAndAnswer = () => {
  const left = getRandomNumber(1, 10);
  const right = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const multIndex = getRandomNumber(0, 2);
  const question = `${left} ${operators[multIndex]} ${right}`;
  const operator = operators[multIndex];

  const currentAnswer = calc[operator](left, right);
  return [question, String(currentAnswer)];
};

export const brainCalc = () => {
  playGame(questionGames, questionAndAnswer);
};
