import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";

const reducer = combineReducers({
    //if we had multiple reducers, we would list them all here. 
    counter: counterReducer
})

const store = createStore(reducer);


export default store;