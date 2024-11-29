import readlineSync from 'readline-sync';
import { questionGame, gameRules } from './games/even.js';

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(questionGame);

  for (let i = 3; i > 0; i -= 1) {
    const [question, currentAnswer] = gameRules();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === currentAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer} is wrong answer ;(. Correct answer was ${currentAnswer}.'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default playGame;
