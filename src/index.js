import React from "react";
import { render } from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import App from "./App";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import index from './redux/sagas';
import {logger} from "redux-logger";

// REDUX DEVTOOLS 용도
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));

//sagaMiddleware 는 store 생성 후, 실행
sagaMiddleware.run(index);

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
