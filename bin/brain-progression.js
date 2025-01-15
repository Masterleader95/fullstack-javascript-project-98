#!/usr/bin/env node

import runGame from '../src/index.js';

const getProgressionQuestionAndAnswer = () => {
  const length = Math.floor(Math.random() * 6) + 5; // Longitud entre 5 y 10
  const start = Math.floor(Math.random() * 20) + 1; // Número inicial entre 1 y 20
  const step = Math.floor(Math.random() * 10) + 1; // Paso entre 1 y 10

  const progression = Array.from({ length }, (_, index) => start + step * index);

  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[hiddenIndex]);

  const questionProgression = [...progression];
  questionProgression[hiddenIndex] = '..';
  const question = questionProgression.join(' ');

  return { question, answer: correctAnswer };
};

const instruction = '¿Qué número falta en la progresión?';

runGame('Progresión aritmética', getProgressionQuestionAndAnswer, instruction);
