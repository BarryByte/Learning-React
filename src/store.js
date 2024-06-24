import { createStore } from "redux";
//reducer is a function that takes the current state and an action and returns a new state
//provider is a component that makes the store available to all components in the application
//dispatcher is a function that sends actions to the store
//redux is a library that helps manage the state of the application
//payload is the data that is sent with the action
//action is an object that describes what happened in the application
function cartReducer(state = { items: {} }, action) {
  const product = action.payload;
  switch (action.type) {
    case "Add_to_cart": {
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        };
      }
    }
    case "Remove_from_cart": {
    }
    default:
      return state;
  }
}

const store = createStore(cartReducer);

export default store;

// we wrap the component using a provider and it will have access to the store
