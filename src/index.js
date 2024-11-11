import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${name}!`;
  console.log(hello);
  return name;
};
export const questionGames = (questionGame) => {
  console.log(`${questionGame}?`);
};
export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
