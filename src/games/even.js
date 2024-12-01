import randomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
export const generateQuestion = () => {
  const result = randomNumber();
  return result;
};

export const questionAndAnswer = () => {
  const question = generateQuestion();
  const currentAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, currentAnswer];
};

const isEven = () => {
  playGame(questionGame, questionAndAnswer);
};
export { isEven };
