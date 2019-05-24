import React from 'react';
import PropTypes from 'prop-types';
import plus from 'media/plus.png';
import minus from 'media/minus.png';

const listStyle = {
    paddingLeft: 30,
    paddingBottom: 10,
    paddingRight: 5,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start'
}

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start'
}

const textStyle = {
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start'
}

export function QuestionStatus(props) {

    function renderImage() {
        if (props.answerStatus) {
            return <img src={plus} className="plus" alt="plus"/>;
        } else {
            return <img src={minus} className="plus" alt="plus"/>;
        }
    }

    return (
        <div style={listStyle}>
            {renderImage()}
            <div style={textStyle}>
                <span className="truncate">
                    {props.question.replace(/&quot;/g,'"')
                                   .replace(/&#039;/g,"'")
                                   .replace(/&ocirc;/g, "ô")
                                   .replace(/&amp;/g,' & ')}
                </span>
                <div style={contentStyle}>
                    <div>
                        <strong>correct answer: </strong>
                        <span>
                            {props.answer.replace(/&quot;/g,'"')
                                         .replace(/&#039;/g,"'")
                                         .replace(/&ocirc;/g, "ô")
                                         .replace(/&amp;/g,' & ')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

QuestionStatus.propTypes = {
    question: PropTypes.string.isRequired,
    answerStatus: PropTypes.bool.isRequired,
    answer: PropTypes.string.isRequired,
};

export default QuestionStatus;