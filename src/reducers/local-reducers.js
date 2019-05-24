export const localReducer = (
    state = {
        index: 0,
        rightAns: 0,
        totalQs: 10,
        type: "boolean",
        difficulty: "hard",
    }, action) => {
    
    switch(action.type) {
        case "MODIFY_TOTAL_QS":
            state = {
                ...state,
                totalQs: action.payload
            }
            break;
        case "MODIFY_DIFFICULTY":
            state = {
                ...state,
                difficulty: action.payload
            }
            break;
        case "MODIFY_TYPE":
            state = {
                ...state,
                type: action.payload
            }
            break;
        case "CLEAR_LOCAL_STATE":
            state = {
                ...state,
                index: 0,
                rightAns: 0,
                totalQs: 10,
                type: "boolean",
                difficulty: "hard",
            }
            break;
        case "INCREASE_INDEX":
            state = {
                ...state,
                index: state.index + 1,
            }
            break;
        case "CORRECT_ANSWER_COUNT":
            state = {
                ...state,
                rightAns: state.rightAns + 1
            }
            break;
        default:
            break;
    }
    return state;
};