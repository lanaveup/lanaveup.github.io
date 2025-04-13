
import React, { useState } from 'react';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { CheckCircle, XCircle, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Quiz data
const quizQuestions = [
  {
    question: "¿Cuál es la mejor manera de validar una idea de startup?",
    options: [
      "Construir el producto completo de inmediato",
      "Realizar investigación de mercado y crear un MVP",
      "Buscar inversores sin un prototipo",
      "Mantener la idea en secreto para evitar copias"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué es un 'pivot' en el mundo startup?",
    options: [
      "Una ronda de financiación",
      "Un cambio significativo en la estrategia de negocio",
      "Un evento de lanzamiento",
      "Una técnica de marketing digital"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué significa 'bootstrapping' en startups?",
    options: [
      "Financiar tu startup con fondos propios sin inversión externa",
      "Utilizar IA para automatizar procesos",
      "Diseñar un logo atractivo",
      "Preparar una presentación para inversores"
    ],
    correctAnswer: 0
  }
];

// Quiz component
const StartupQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Start the quiz
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    if (!answered) {
      setSelectedOption(optionIndex);
    }
  };

  // Check the selected answer
  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setAnswered(true);
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Go to next question or show results
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setAnswered(false);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Reset the quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setQuizStarted(false);
  };

  // Calculate progress percentage
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="quiz">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-nave-blue/10 rounded-full mb-6">
            <Award className="h-8 w-8 text-nave-blue" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-nave">
            Pon a prueba tus conocimientos
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            ¿Cuánto sabes sobre el ecosistema startup? Realiza este quiz rápido para descubrirlo y recibe recomendaciones personalizadas.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {!quizStarted ? (
            <motion.div 
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">¿Listo para empezar?</h3>
              <p className="mb-8 text-foreground/80">
                Solo 3 preguntas para poner a prueba tus conocimientos sobre startups
              </p>
              <Button 
                onClick={handleStartQuiz} 
                size="lg"
                className="bg-gradient-to-r from-nave-blue to-nave-lightblue hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
              >
                Comenzar quiz
              </Button>
            </motion.div>
          ) : showResult ? (
            <motion.div 
              className="text-center py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-4 bg-nave-green/10 rounded-full mb-6">
                <Award className="h-10 w-10 text-nave-green" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                ¡Has completado el quiz!
              </h3>
              <p className="text-3xl font-bold text-nave-blue mb-6">
                Tu puntuación: {score} de {quizQuestions.length}
              </p>
              <p className="mb-8 text-foreground/80">
                {score === quizQuestions.length ? 
                  '¡Impresionante! Tienes un gran conocimiento del mundo startup.' : 
                  score >= quizQuestions.length/2 ? 
                    'Buen trabajo. Estás en buen camino para convertirte en un experto.' : 
                    'Hay espacio para mejorar. ¡Suscríbete a nuestro newsletter para aprender más!'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={handleRestart} 
                  variant="outline"
                  className="hover:bg-nave-blue/5 transition-all duration-300 hover:border-nave-blue"
                >
                  Reiniciar quiz
                </Button>
                <Button 
                  className="bg-gradient-to-r from-nave-blue to-nave-lightblue hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                  asChild
                >
                  <a href="#suscribirse">Suscribirme al newsletter</a>
                </Button>
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-sm text-foreground/70">
                  <span>Pregunta {currentQuestion + 1} de {quizQuestions.length}</span>
                  <span>Puntuación: {score}/{currentQuestion}</span>
                </div>
                <Progress value={progress} className="h-2 bg-gray-100" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                {quizQuestions[currentQuestion].question}
              </h3>
              
              <RadioGroup 
                className="space-y-4 mb-8" 
                value={selectedOption?.toString()} 
                onValueChange={(value) => handleOptionSelect(parseInt(value))}
                disabled={answered}
              >
                <AnimatePresence>
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                        answered && index === quizQuestions[currentQuestion].correctAnswer 
                          ? 'bg-green-50 border-green-200' 
                          : answered && index === selectedOption 
                            ? 'bg-red-50 border-red-200' 
                            : 'border-gray-200'
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <div className="flex items-start">
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                      </div>
                      <div className="flex-grow">
                        <Label htmlFor={`option-${index}`} className="text-base font-medium cursor-pointer">
                          {option}
                        </Label>
                      </div>
                      {answered && index === quizQuestions[currentQuestion].correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {answered && index === selectedOption && index !== quizQuestions[currentQuestion].correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </RadioGroup>
              
              <div className="flex justify-center">
                {!answered ? (
                  <Button 
                    onClick={handleCheckAnswer} 
                    disabled={selectedOption === null}
                    className="w-full sm:w-auto bg-gradient-to-r from-nave-blue to-nave-lightblue hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Comprobar respuesta
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNextQuestion} 
                    className="w-full sm:w-auto bg-gradient-to-r from-nave-blue to-nave-lightblue hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <>Siguiente pregunta <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></>
                    ) : (
                      'Ver resultado'
                    )}
                  </Button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default StartupQuiz;
