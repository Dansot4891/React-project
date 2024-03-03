import React, { useState } from 'react';

const OXQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id:1,
      question: '한국의 수도는 서울인가요?',
      answer: true,
      answer2:'O',
      noans:'X'
    },
    {
      id:2,
      question: '한글은 대한민국의 공식 언어인가요?',
      answer: true,
      answer2:'O',
      noans:'X'
    },
    {
      id:3,
      question: '한반도의 북쪽에는 북한이 위치해 있나요?',
      answer: true,
      answer2:'O',
      noans:'X'
    },
    {
        id:4,
        question: '영화관에서 영화를 볼 때에는 핸드폰 전원을 꺼두는 것이 에티켓이다.',
        answer: true,
        answer2:'O',
        noans:'X'
    },
    {
        id:5,
        question: '한국의 설날은 양력 1월 1일이다.',
        answer: false,
        answer2:'X',
        noans:'O'
    },
  ]);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (userAnswer) => {
    const isCorrect = userAnswer === questions[currentQuestion].answer;
    setUserAnswers([...userAnswers, { question: currentQuestion, answer: userAnswer, isCorrect }]);
    setCurrentQuestion(currentQuestion + 1);
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
  
  
  const Quiz = {
    marginTop: "60px",
    padding: "24px",
    borderRadius: "2px",
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

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div style={Quiz}>
          <div style={{textAlignLast:"center"}} className='num'><p>{questions[currentQuestion].id} • 5</p></div>
        <div style={{textAlign:"center"}}>
          <div>
            <h2>Q{questions[currentQuestion].id}. {questions[currentQuestion].question}</h2>
            </div>
          <div style={{marginTop:"40px"}}>
          <button style={ButtonStyle} onClick={() => handleAnswer(true)}>O</button>
          {"           "}
          <button style={ButtonStyle} onClick={() => handleAnswer(false)}>X</button>
          </div>
            
        </div>
        </div>
      ) : (
        <div className='end'>
          
          {userAnswers.map((answer, index) => (
            <div key={index}>
              {index + 1}. {questions[answer.question].question}
              <p>
                  <span style={{ color: answer.isCorrect ? 'white' : 'red' }}>
                  {answer.isCorrect ? `${questions[answer.question].answer2}` : `${questions[answer.question].noans}`} → {answer.isCorrect ? '정답' : '오답'}
                  </span>
                </p>
                <p>
                {answer.isCorrect ? '' : `정답 : ${questions[answer.question].answer2}`}
                </p>
                <br></br>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OXQuiz;