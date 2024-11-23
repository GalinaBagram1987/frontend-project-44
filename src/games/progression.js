import readlineSync from 'readline-sync';
import { greetings } from '../index.js';
import { questionGames } from '../index.js';
import { congratulations } from '../index.js';

const playerName = greetings();
questionGames('What number is missing in the progression');
const progression = () => {
  for (let i = 3; i > 0; i -= 1) {
    const arrayNumber = () => {
      let startNumber = Math.ceil(Math.random() * 100);
      const multiplier = Math.ceil(Math.random() * 10);
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
    const answerArray = arrayNumber();
    const randomIndex = Math.floor(Math.random() * 10);
    const correctAnswer = answerArray[randomIndex];

    const hiddenElArr = answerArray;
    hiddenElArr[randomIndex] = '..';
    const questionArray = hiddenElArr.join(' ');
    console.log(`Question: ${questionArray}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}'  is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  congratulations(playerName);
};
export default progression;
