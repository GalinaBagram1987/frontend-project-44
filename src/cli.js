import readlineSync from "readline-sync";
export const greetings = () => {
  const name = readlineSync.question("Your answer: ");
};
