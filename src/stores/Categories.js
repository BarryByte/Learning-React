export function loadCategories() {
    return (dispatch) => {
        fetch('https://fakestoreapi.com/products/categories').then(
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
