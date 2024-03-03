import React, { useState } from 'react';
import './Quiz.css';

const MultichoiceQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '한글이 만들어진 연도는 언제인가요?',
      choices: ['1443년', '1392년', '1446년', '1395년'],
      answer: '1443년',
    },
    {
      id: 2,
      question: '한국 전통 음식 중 삼계탕의 주 재료는 무엇인가요?',
      choices: ['닭고기', '소고기', '돼지고기', '오리고기'],
      answer: '닭고기',
    },
    {
      id: 3,
      question: '한국의 전통 의상인 한복은 언제부터 입혀지기 시작했나요?',
      choices: ['고려 시대', '조선 시대', '신라 시대', '근현대'],
      answer: '조선 시대',
    },
    {
      id: 4,
      question: '한국의 전통 악기 중 가야금은 몇 개의 현이 있는 악기인가요?',
      choices: ['4개', '6개', '12개', '18개'],
      answer: '12개',
    },
    {
      id: 5,
      question: '한국의 전통 무용 중 하나인 "탈춤"은 어떤 특징이 있나요?',
      choices: ['가면을 쓴 춤', '불을 이용한 춤', '물 속에서 하는 춤', '도구를 사용하는 춤'],
      answer: '가면을 쓴 춤',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (choice) => {
    const correctAnswer = questions[currentQuestion].answer;

    const isCorrectAnswer = choice === correctAnswer;

    setUserAnswers([...userAnswers, { question: currentQuestion, answer: choice, isCorrect: isCorrectAnswer }]);
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer('');
  };

  const Quiz = {
    marginTop: "60px",
    padding: "24px",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
    width: "750px",
    height: "220px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#1D85FF",
    cursor: "pointer",
    color: "white",
    textAlign: "center",
    transition: "box-shadow 0.3s ease-in-out",
  };

  const ButtonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#1D85FF",
    border: "1px white",
    cursor: "pointer",
    borderRadius: "20px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div>
      <div>
        {currentQuestion < questions.length ? (
          <div style={Quiz}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }} className='num'>
              <p style={{ margin: 0 }}>{questions[currentQuestion].id} • 5</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div>
                <h2>Q{questions[currentQuestion].id}. {questions[currentQuestion].question}</h2>
                <div style={{padding:"8px"}}>
                  {questions[currentQuestion].choices.map((choice, index) => (
                    <button key={index} style={ButtonStyle} onClick={() => handleAnswer(choice)}>{choice}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='end'>
            <h2>퀴즈가 종료되었습니다.</h2>
            {userAnswers.map((answer, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {questions[answer.question].question}
                </p>
                <p>
                  <span style={{ color: answer.isCorrect ? 'white' : 'red' }}>
                    {answer.answer} → {answer.isCorrect ? '정답' : '오답'}
                  </span>
                </p>
                <p>
                  {answer.isCorrect ? '' : `정답 : ${questions[answer.question].answer}`}
                </p>
                <br></br>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultichoiceQuiz;