export const apiFetchBegin = () => ({
    type: "FETCH",
});

export const apiFetchSuccess = (response) => ({
    type: "POPULATE",
    payload: response,
});

export const apiFetchError = () => ({
    type: "ERROR"
});

export const clearAPIState = () => ({
    type: "CLEAR_API_STATE"
});

export const correctlyAnswered = (index) => ({
    type: "CORRECTLY_ANSWERED",
    payload: index
})