export function loadCategories() {
    return (dispatch) => {
        fetch('https://mocki.io/v1/3696c3c4-4e95-496d-bdb6-24843dca0257').then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
        })
    }
}

function categoriesReducer(state = {
    categories: []
}, action) { 
    switch (action.type) {
        case "LOAD_CATEGORIES_DONE": {
            return {
                ...state,
                categories: action.payload
            }
        }
        default:
            return state;
    }
}

export default categoriesReducer;
