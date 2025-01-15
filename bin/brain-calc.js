#!/usr/bin/env node

import runGame from '../src/index.js';

const getCalcQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
  const num2 = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
  const question = `${num1} ${operator} ${num2}`;
  let answer;

  switch (operator) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    case '*':
      answer = String(num1 * num2);
      break;
    default:
      answer = '';
  }

  return { question, answer };
};

const instruction = '¿Cuál es el resultado de la expresión?';
 
// Ejecutar el juego "Calculadora"
runGame('Calculadora', getCalcQuestionAndAnswer, instruction);
