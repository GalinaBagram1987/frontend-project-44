import readlineSync from 'readline-sync';
import { greetings, questionGames, congratulations } from '../index.js';

const playerName = greetings();
questionGames('Answer "yes" if given number is prime. Otherwise answer "no".');
// отдельно создадим функцию для проверки простое или нет число, чтобы использовать ее в игре
const checkPrime = (num) => {
  if (num <= 1) return false; // 0 и 1 не могут быть простым числом
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      return false; // Если найден хотя бы один доп делитель, то число не простое
    }
  }
  return true; // Число простое
};
// создаем функцию с циклом для самой игры
const findPrime = () => {
  for (let i = 3; i > 0; i -= 1) {
    const num = Math.ceil(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    const isPrime = checkPrime(num); // Проверяем, является ли число простым
    const correctAnswer = isPrime ? 'yes' : 'no'; // if isPrime === true => correctAnswer = 'yes', if isPrime === false => correctAnwer === 'no'

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${playerName}!`);
      return; // Завершаем игру, если ответ неверен
    }
  }
  congratulations(playerName);
};

export default findPrime;
