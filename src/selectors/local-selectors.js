const getLocalState = (state) => state.local;

export const getIndex = (state) => getLocalState(state).index;

export const getTotalQsRequested = (state) => getLocalState(state).totalQs;

export const getCorrectUserAnswers = (state) => getLocalState(state).rightAns;

export const getType = (state) => getLocalState(state).type;

export const getDifficulty = (state) => getLocalState(state).difficulty;