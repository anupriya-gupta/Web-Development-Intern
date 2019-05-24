import { getIndex } from "selectors";


const getApiState = (state) => state.api;

const getMedia = (state) => getApiState(state).media;

export const getAnswer = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].correct_answer;
    }
    return '';
}

export const getAnswerOptions = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].options;
    }
    return [];
}

export const getQuestion = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].question;
    }
    return '';
}

export const getQuestionAnswerList = (state) => {
    const media = getMedia(state);
    const list = [];
    for (var i = 0; i < media.length; i++) {
        list.push({
            id: i,
            question: media[i].question,
            answer: media[i].correct_answer,
            correctly_answered: media[i].correctly_answered,
        })
    }
    return list;
}

export const getTotalQuestions = (state) => {
    const media = getMedia(state);
    return media.length;
}

export const getCategory = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].category;
    }
    return '';
}

export const getIsLoading = (state) => getApiState(state).isFetching;

export const getAnswerStatusForUser = (state) => {
    const media = getMedia(state);
    if (getIndex(state) < media.length) {
        return media[getIndex(state)].correctly_answered;
    }
    return false;
}