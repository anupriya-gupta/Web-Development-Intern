import React from 'react';
import PropTypes from 'prop-types';
import { Question, QuestionCount, AnswerOption } from 'components';
import './problem.css';

export function Problem(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.id}
        answerContent={key.answer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div>
      <QuestionCount counter={props.questionId+1} total={props.questionTotal} />
      <div>{props.category}</div>
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

Problem.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Problem;