#!/usr/bin/env node

import runGame from '../src/index.js';

const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) return false;
    }
    return true;
  };
  
  const getPrimeQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';
    return { question, answer };
  };

  const instruction = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
  
  runGame('¿Es primo?', getPrimeQuestionAndAnswer, instruction);