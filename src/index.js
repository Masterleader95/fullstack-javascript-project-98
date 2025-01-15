import readlineSync from 'readline-sync';

const runGame = (gameName, getQuestionAndAnswer, instruction) => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);
  console.log(instruction);

  const totalRounds = 3;
  let correctAnswers = 0;

  while (correctAnswers < totalRounds) {
    const { question, answer } = getQuestionAndAnswer();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').trim().toLowerCase();

    if (userAnswer === answer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${answer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default runGame;
