import { useState } from 'react';
const QUESTIONS = [
  {
    id: 1,
    question: "What is the building block of a React app?",
    options: ["Component", "Prop", "State", "Hook"],
    correctAnswer: "Component",
  },
  {
    id: 2,
    question: "How do you pass data from a parent to a child?",
    options: ["State", "Props", "JSX", "Functions"],
    correctAnswer: "Props",
  },
  {
    id: 3,
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
  {
    id: 4,
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "JavaScript Syntax"],
    correctAnswer: "JavaScript XML",
  },
  {
    id: 5,
    question: "Which method is used to render lists in React?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    correctAnswer: "map()",
  },
];
function QuestionCard({ question, onAnswerClick }) {
  return (
    <div className="question-card">
      <h2 className="question-text">{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
function ResultsScreen({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  return (
    <div className="results-screen">
      <h2>Quiz Finished!</h2>
      <div className="score-display">
        <p className="score-text">You scored</p>
        <p className="score-number">{score} out of {totalQuestions}</p>
        <p className="percentage">{percentage}%</p>
      </div>
      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}
function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };
  const isQuizFinished = currentQuestionIndex >= QUESTIONS.length;
  return (
    <div className="app">
      <h1 className="app-title">QuickQuiz</h1>
      {!isQuizFinished && (
        <div className="progress-bar">
          Question {currentQuestionIndex + 1} of {QUESTIONS.length}
        </div>
      )}
      {isQuizFinished ? (
        <ResultsScreen 
          score={score} 
          totalQuestions={QUESTIONS.length}
          onRestart={handleRestart}
        />
      ) : (
        <QuestionCard 
          question={QUESTIONS[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      )}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .app {
          max-width: 600px;
          width: 90%;
          margin: 20px;
        }
        .app-title {
          color: white;
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .progress-bar {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-align: center;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .question-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        .question-text {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 30px;
          line-height: 1.4;
        }
        .options {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .option-button {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 18px 24px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          color: #333;
          font-weight: 500;
        }
        .option-button:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        .option-button:active {
          transform: translateY(0);
        }
        .results-screen {
          background: white;
          border-radius: 20px;
          padding: 50px 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        .results-screen h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 30px;
        }
        .score-display {
          margin: 40px 0;
        }
        .score-text {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 10px;
        }
        .score-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 10px;
        }
        .percentage {
          font-size: 3rem;
          font-weight: bold;
          color: #764ba2;
        }
        .restart-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 18px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }
        .restart-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        .restart-button:active {
          transform: translateY(0);
        }
        @media (max-width: 600px) {
          .app-title {
            font-size: 2rem;
          }
          .question-card, .results-screen {
            padding: 30px 20px;
          }
          .question-text {
            font-size: 1.2rem;
          }
          .option-button {
            padding: 15px 20px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;// TERMINAL TEST SATIRI
