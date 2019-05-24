import React from 'react';
import PropTypes from 'prop-types';
import './answer-option.css';

export function AnswerOption(props) {
  return (
    <div>
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerContent === props.answer}
        id={props.answerContent}
        value={props.answerContent}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerContent}>
        {props.answerContent.replace(/&quot;/g,'"')
                            .replace(/&#039;/g,"'")
                            .replace(/&ocirc;/g, "ô")
                            .replace(/&amp;/g,' & ')}
      </label>
    </li>
    <div className="answerOption"/>
    </div>
  );
}

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};