import React, { useState } from 'react';
import './Quiz.css';

const SubjectiveQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      id:1,
      question: '한국의 국기를 뭐라고 부르는가?',
      answer: '태극기',
    },
    {
      id:2,
      question: '나라를 사랑하는 노래라는 의미로 대한민국의 국가를 일컫는 것은?',
      answer: '애국가',
    },
    {
      id:3,
      question: '한국에서 가장 높은 산은?',
      answer: '한라산',
    },
    {
      id:4,
      question: '한글을 만든 사람은?',
      answer: '세종대왕',
    },
    {
      id:5,
      question: '정월 대보름은 음력으로 매년 음력으로 언제인가? [ex)○월 ○○일]',
      answer: '1월 15일',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = () => {
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    const userLowercaseAnswer = userAnswer.toLowerCase();

    const isCorrectAnswer = userLowercaseAnswer === correctAnswer;

    setUserAnswers([...userAnswers, { question: currentQuestion, answer: userLowercaseAnswer, isCorrect: isCorrectAnswer }]);
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
    color:"white",
    textalign:"center",
    transition: "box-shadow 0.3s ease-in-out",
};

const ButtonStyle = {
  marginTop:"10px",
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
          <div style={{textAlign:"center"}}>
            <div>
            <h2>Q{questions[currentQuestion].id}. {questions[currentQuestion].question}</h2>
            </div>
            <input className='inputSol'
              type="text"
              placeholder="정답을 입력해주세요"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <div><button style={ButtonStyle} onClick={handleAnswer}>정답 입력</button></div>
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

export default SubjectiveQuiz;