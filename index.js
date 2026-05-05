```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: '¿Cuál es la capital de Francia?',
    options: ['A) Londres', 'B) París', 'C) Berlín', 'D) Madrid'],
    correct: 'B'
  },
  {
    question: '¿En qué año llegó el hombre a la luna?',
    options: ['A) 1965', 'B) 1967', 'C) 1969', 'D) 1971'],
    correct: 'C'
  },
  {
    question: '¿Cuál es el planeta más grande del sistema solar?',
    options: ['A) Saturno', 'B) Neptuno', 'C) Júpiter', 'D) Tierra'],
    correct: 'C'
  },
  {
    question: '¿Cuántos continentes hay en la Tierra?',
    options: ['A) 5', 'B) 6', 'C) 7', 'D) 8'],
    correct: 'C'
  },
  {
    question: '¿Quién escribió "Don Quijote"?',
    options: ['A) García Márquez', 'B) Miguel de Cervantes', 'C) Jorge Luis Borges', 'D) Federico García Lorca'],
    correct: 'B'
  },
  {
    question: '¿Cuál es el río más largo de América del Sur?',
    options: ['A) Orinoco', 'B) Amazonas', 'C) Paraná', 'D) Magdalena'],
    correct: 'B'
  },
  {
    question: '¿En qué país se encuentra la Estatua de la Libertad?',
    options: ['A) Canadá', 'B) Francia', 'C) Estados Unidos', 'D) México'],
    correct: 'C'
  },
  {
    question: '¿Cuál es el elemento químico más abundante en la atmósfera?',
    options: ['A) Oxígeno', 'B) Argón', 'C) Nitrógeno', 'D) Helio'],
    correct: 'C'
  },
  {
    question: '¿Cuántos lados tiene un hexágono?',
    options: ['A) 5', 'B) 6', 'C) 7', 'D) 8'],
    correct: 'B'
  },
  {
    question: '¿Cuál es la velocidad de la luz?',
    options: ['A) 150,000 km/s', 'B) 200,000 km/s', 'C) 300,000 km/s', 'D) 350,000 km/s'],
    correct: 'C'
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestion >= questions.length) {
    showFinalScore();
    return;
  }

  const question = questions[currentQuestion];
  console.log('\n' + '='.repeat(60));
  console.log(`Pregunta ${currentQuestion + 1}/${questions.length}`);
  console.log('='.repeat(60));
  console.log(`\n${question.question}\n`);
  question.options.forEach(option => console.log(option));
  
  promptAnswer();
}

function promptAnswer() {
  rl.question('\nTu respuesta (A/B/C/D): ', (answer) => {
    answer = answer.toUpperCase().trim();
    
    if (!['A', 'B', 'C', 'D'].includes(answer)) {
      console.log('❌ Respuesta inválida. Por favor ingresa A, B, C o D.');
      promptAnswer();
      return;
    }

    const question = questions[currentQuestion];
    if (answer === question.correct) {
      console.log('✅ ¡Correcto!');
      score++;
    } else {
      console.log(`❌ Incorrecto. La respuesta correcta es ${question.correct}`);
    }

    currentQuestion++;
    setTimeout(displayQuestion, 1500);
  });
}

function showFinalScore() {
  const percentage = ((score / questions.length) * 100).toFixed(1);
  const maxScore = questions.length;

  console.log('\n' + '='.repeat(60));
  console.log('QUIZ FINALIZADO');
  console.log('='.repeat(60));
  console.log(`\nPuntuación Final: ${score}/${maxScore}`);
  console.log(`Porcentaje: ${percentage}%`);
  
  if (percentage >= 90) {
    console.log('🏆 ¡Excelente! Eres un experto.');
  } else if (percentage >= 70) {
    console.log('🎯 ¡Muy bien! Buen desempeño.');
  } else if (percentage >= 50) {
    console.log('👍 Aceptable. Puedes mejorar.');
  } else {
    console.log('📚 Necesitas estudiar más.');
  }
  
  console.log('='.repeat(60) + '\n');
  rl.close();
  process.exit(0);
}

function startQuiz() {
  console.log('\n' + '='.repeat(60));
  console.log('BIENVENIDO AL QUIZ DE CONOCIMIENTOS GENERALES');
  console.log('='.repeat(60));
  console.log('\nResponde 10 preguntas de opción múltiple.');
  console.log('Opciones: A, B, C, D\n');
  console.log('