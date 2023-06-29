import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import usersReducers from "./users/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    users: usersReducers
  });

  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware()));

  return { store };
};

export default configureStore;
