import readlineSync from 'readline-sync';
import { greetings } from '../index.js';
import { questionGames } from '../index.js';
import { congratulations } from '../index.js';

const playerName = greetings();
questionGames('What is the result of the expression?');
const brainCalc = () => {
  for (let i = 3; i > 0; i -= 1) {
    const left = Math.ceil(Math.random() * 100);
    const right = Math.ceil(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const j = Math.floor(Math.random() * operators.length);
    const question = `${left} ${operators[j]} ${right}`;
    let calculation;
    switch (operators[j]) {
      case '+':
        calculation = left + right;
        break;
      case '-':
        calculation = left - right;
        break;
      case '*':
        calculation = left * right;
        break;
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === calculation) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${calculation}'.\n Let's try again, ${playerName}!`
      );
      return;
    }
  }
  congratulations(playerName);
};
export default brainCalc;
