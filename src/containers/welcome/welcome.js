import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Choice, Header } from 'components';
import { getCorrectUserAnswers, getTotalQsRequested, getType, getDifficulty } from 'selectors';
import { modifytotalQs, modifyDifficulty, modifyType} from 'actions';
import './welcome.css';

const divStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '2.5rem'
};

const difficultyOption = [{id: 0, type: "easy"},
                          {id: 1, type: "medium"},
                          {id: 2, type: "hard"}];

const qsTypeOption = [{id: 0, type: "boolean"},
                          {id: 1, type: "multiple"},
                          {id: 2, type: "mix it up"}];

const quizSizeOption = [{id: 0, type: "5"},
                          {id: 1, type: "10"},
                          {id: 2, type: "20"}];

class welcome extends Component {

    constructor(props) {
        super(props);
        this.handleDifficultySelected = this.handleDifficultySelected.bind(this);
        this.handleTypeSelected = this.handleTypeSelected.bind(this);
        this.handleSizeSelected = this.handleSizeSelected.bind(this);
    }

    handleDifficultySelected(event) {
        this.props.difficulty(event.target.value);
    }

    handleTypeSelected(event) {
        if (event.target.value === "mix it up") {
            this.props.qsType(undefined);
        } else {
            this.props.qsType(event.target.value);
        }
    }

    handleSizeSelected(event) {
        this.props.totalQs(Number(event.target.value));
    }

    render() {
        return (
            <div className="App">
                <Header content={"Welcome to the Trivia Challenge!!"}/>
                <div>
                    <Choice 
                        header={"Question Type:"}
                        choiceOptions={qsTypeOption}
                        onChoiceSelected={this.handleTypeSelected}
                        selected={this.props.typeSelected}
                    />
                    <Choice 
                        header={"Difficulty:"}
                        choiceOptions={difficultyOption}
                        onChoiceSelected={this.handleDifficultySelected}
                        selected={this.props.difficultySelected}
                    />
                    <Choice 
                        header={"Expected Quiz Size:"}
                        choiceOptions={quizSizeOption}
                        onChoiceSelected={this.handleSizeSelected}
                        selected={this.props.totalQsSelected.toString()}
                    />
                    <br/>
                    <div style={divStyle}>
                        <Link to="/main" className="btn btn-primary">
                            Can you score 100%, Let's get started with this. All the Best !!
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    correctAnswers: getCorrectUserAnswers(state),
    totalQsSelected: getTotalQsRequested(state),
    typeSelected: getType(state),
    difficultySelected: getDifficulty(state)
});

const mapDispatchToProps = (dispatch) => ({
    totalQs(size) {
        dispatch(modifytotalQs(size));
    },
    difficulty(diff) {
        dispatch(modifyDifficulty(diff));
    },
    qsType(type) {
        dispatch(modifyType(type));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(welcome);