import readlineSync from 'readline-sync';

const playGame = (questionGame, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(questionGame);

  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const [question, currentAnswer] = questionAndAnswer();
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
