import isRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGames = 'What is the result of the expression?';

const calc = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
}; // создаем функции для каждой операции

const questionAndAnswer = () => {
  const left = isRandomNumber(1, 10);
  const right = isRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const multIndex = Math.floor(Math.random() * operators.length);
  // я знаю, что могу написать просто равно isRandomNumber(0, 2);
  // но так игра интересная не получается, очень часто выпадают одно и тоже действие
  const question = `${left} ${operators[multIndex]} ${right}`;
  const operator = operators[multIndex];

  const currentAnswer = calc[operator](left, right);
  return [question, String(currentAnswer)];
};

export const brainCalc = () => {
  playGame(questionGames, questionAndAnswer);
};
