// import readlineSync from 'readline-sync';
import randomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
export const generateQuestion = () => {
  const result = randomNumber();
  return result;
};

export const gameRules = () => {
  const question = generateQuestion();
  const currentAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, currentAnswer];
};

const isEven = () => {
  playGame(gameRules);
};
export { isEven };
