import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { getQuestions } from 'api/question-list';
import { Problem, Header } from 'components';
import { getAnswer,
    getAnswerOptions,
    getQuestion,
    getTotalQuestions,
    getIndex,
    getCategory,
    getIsLoading,
    getTotalQsRequested,
    getType,
    getDifficulty
} from 'selectors';
import { increaseIndex,
    modifyCorrectAnswerCount,
    correctlyAnswered
} from 'actions';
import './main.css';

class main extends Component {

    constructor(props) {
        super(props);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        getQuestions(this.props.qsRequested, this.props.difficultyRequested, this.props.typeRequested);
    }

    handleAnswerSelected(event) {
        if (event.target.value === this.props.answer) {
            this.props.rightAnswer(this.props.index);
        }
        if (this.props.index < this.props.totalQuestion-1) {
            this.props.displayNextQs();
        } else {
            this.props.history.push('/result');
        }
    }

    renderContent() {
        if (this.props.isLoading) {
            return (
                <div>
                  <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'black'}
                    loading={true}
                  />
                </div> 
              );
        } else {
            return (
                <Problem
                    answer={this.props.answer}
                    answerOptions={this.props.answerOptions}
                    questionId={this.props.index}
                    question={this.props.question}
                    questionTotal={this.props.totalQuestion}
                    onAnswerSelected={this.handleAnswerSelected}
                    category={this.props.category}
                />
            );
        }
    }

    render() {
        return (
            <div className="App">
                <Header content={"Quiz"}/>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    totalQuestion: getTotalQuestions(state),
    answer: getAnswer(state),
    answerOptions: getAnswerOptions(state),
    question: getQuestion(state),
    index: getIndex(state),
    category: getCategory(state),
    isLoading: getIsLoading(state),
    qsRequested: getTotalQsRequested(state),
    typeRequested: getType(state),
    difficultyRequested: getDifficulty(state)
});

const mapDispatchToProps = (dispatch) => ({
    displayNextQs() {
        dispatch(increaseIndex());
    },
    rightAnswer(index) {
        dispatch(modifyCorrectAnswerCount());
        dispatch(correctlyAnswered(index));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(main);
