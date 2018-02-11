import { createStore } from "redux";

console.log("Redux Store");

//Action is an object to change the state and is sent to the store. action is passed as a second parameter to the createStore method. When an action is dispatched
//the createStore method is called everytime.

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//type is a mandatory property to be defined for redux store to understand the type of dispatch

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

store.dispatch({
  type: "INCREMENT"
});

//UNSUBSCRIBE will unsubscribe from state changes so any dispatching done after this method will not call subscribe
//unsubscribe();

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

//onsole.log(store.getState());
