import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const middlewares = [];

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, devTools);
export const persistor = persistStore(store);

// Persist Redux - configuration in store.js, root-reducer.js and index.js
