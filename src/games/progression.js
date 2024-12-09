import isRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'What number is missing in the progression';

const arrayNumbers = () => {
  let startNumber = isRandomNumber();
  const multiplier = isRandomNumber();
  const quantity = 10;
  let j = 0;
  const arrNumber = [];
  while (j < quantity) {
    arrNumber.push(startNumber);
    startNumber += multiplier;
    j += 1;
  }
  return arrNumber;
};
export const questionAndAnswer = () => {
  const answerArray = arrayNumbers();
  const randomIndex = isRandomNumber();
  const currentAnswer = answerArray[randomIndex].toString();
  const hiddenElArr = [...answerArray];
  hiddenElArr[randomIndex] = '..';
  const question = hiddenElArr.join(' ');
  return [question, currentAnswer];
};
export const progression = () => {
  playGame(questionGame, questionAndAnswer);
};
