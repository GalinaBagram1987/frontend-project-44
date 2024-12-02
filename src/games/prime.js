import randomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// отдельно создадим функцию для проверки простое или нет число, чтобы использовать ее в игре
const checkPrime = (num) => {
  if (num <= 1) return false; // 0 и 1 не могут быть простым числом
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      return false; // Если найден хотя бы один доп делитель, то число не простое
    }
  }
  return true; // Число простoe
};

export const questionAndAnswer = () => {
  const question = randomNumber();
  const isPrime = checkPrime(question); // Проверяем, является ли число простым, fix result
  const currentAnswer = isPrime ? 'yes' : 'no'; // if isPrime === true => correctAnswer = 'yes', if isPrime === false => correctAnwer === 'no'
  return [question, currentAnswer];
};
const findPrime = () => {
  playGame(questionGame, questionAndAnswer);
};

export { findPrime };
