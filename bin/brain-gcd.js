#!/usr/bin/env node

import runGame from '../src/index.js';

const calculateMCD = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  
  const getMCDQuestionAndAnswer = () => {
    const num1 = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
    const num2 = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
    const question = `${num1} ${num2}`;
    const answer = String(calculateMCD(num1, num2));
    return { question, answer };
  };
  
  const instruction = 'Encuentra el máximo común divisor de los números dados.';
 
  runGame('Máximo común divisor', getMCDQuestionAndAnswer, instruction);