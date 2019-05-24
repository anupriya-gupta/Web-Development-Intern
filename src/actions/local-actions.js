export const increaseIndex = () => ({
    type: "INCREASE_INDEX"
});

export const modifyCorrectAnswerCount = () => ({
    type: "CORRECT_ANSWER_COUNT",
});

export const modifytotalQs = (size) => ({
    type: "MODIFY_TOTAL_QS",
    payload: size
});

export const modifyDifficulty = (diff) => ({
    type: "MODIFY_DIFFICULTY",
    payload: diff
});

export const modifyType = (type) => ({
    type: "MODIFY_TYPE",
    payload: type
});

export const clearLocalState = () => ({
    type: "CLEAR_LOCAL_STATE"
});
