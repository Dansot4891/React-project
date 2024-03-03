import React, {useContext} from 'react';
import SelectType from './SelectType';
import SubjectiveQuiz from './SubjectiveQuiz';
import OXQuiz from './OXQuiz';
import './Quiz.css';
import MultichoiceQuiz from './MultichoiceQuiz';

function MainContent(props) {
    const { Type, toggleType } = useContext(SelectType);

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        {Type === 'Subjective' ? <SubjectiveQuiz /> : (Type === 'OX' ? <OXQuiz /> : <MultichoiceQuiz />)}
        </div>
      </div>
    );
  }

export default MainContent;