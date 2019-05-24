import React from 'react';
import PropTypes from 'prop-types';
import './choice-option.css';

export function ChoiceOption(props) {

  function renderSelectedComponentDifferent() {
    if (props.selected) {
      return (
        <li className="choiceOptionSelected">
          <input
            type="radio"
            className="cradioCustomButton"
            name="cradioGroup"
            id={props.answerContent}
            value={props.answerContent}
            onChange={props.onChoiceSelected}
          />
          <label className="cradioCustomLabel" htmlFor={props.answerContent}>
            {props.answerContent}
          </label>
        </li>
      );
    } else {
      return (
      <li className="choiceOption">
        <input
          type="radio"
          className="cradioCustomButton"
          name="cradioGroup"
          id={props.answerContent}
          value={props.answerContent}
          onChange={props.onChoiceSelected}
        />
        <label className="cradioCustomLabel" htmlFor={props.answerContent}>
          {props.answerContent}
        </label>
      </li>
      );
    }
  }

  return (
    renderSelectedComponentDifferent()
  );
}

ChoiceOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  onChoiceSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool
};