import React from 'react';
import PropTypes from 'prop-types';
import './question.css';

export function Question(props) {
  return <h2 className="question" style={props.textStyle}>
    {props.content.replace(/&quot;/g,'"')
                  .replace(/&#039;/g,"'")
                  .replace(/&ocirc;/g, "ô")
                  .replace(/&amp;/g,' & ')}
  </h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  textStyle: PropTypes.object
};
