import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./components/reduceres";
import thunk from "redux-thunk";

const insialState = {};
const store = createStore(
  rootReducer,
  insialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
