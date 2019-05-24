import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Question, QuestionStatus, Header } from 'components';
import { getCorrectUserAnswers, getTotalQsRequested, getQuestionAnswerList } from 'selectors';
import { clearAPIState, clearLocalState } from 'actions';
import './result.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

const textStyle = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start'
}

class result extends Component {

    renderQsList(key) {
        return (
            <QuestionStatus
                key={key.id}
                question={key.question}
                answerStatus={key.correctly_answered}
                answer={key.answer}
            />
        );
    }

    render() {
        return (
            <div className="App">
                <Header content={"Congratulations, you completed the challenge!!"}/>
                <div style={divStyle}>
                    <br/>
                    <Question
                        content={"You scored " + this.props.correctAnswers + " of " + this.props.totalQs}
                        textStyle={textStyle}/>
                    <br/>
                    <Link to="/" className="btn btn-primary" onClick={this.props.clearState}>
                        Would you like to replay?
                    </Link>
                </div>
                <ul>
                    {this.props.qsList.map(this.renderQsList)}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    correctAnswers: getCorrectUserAnswers(state),
    totalQs: getTotalQsRequested(state),
    qsList: getQuestionAnswerList(state),
});

const mapDispatchToProps = (dispatch) => ({
    clearState: () => {
        dispatch(clearAPIState());
        dispatch(clearLocalState());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(result);