import 'babel-polyfill';
import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import reducers from "./reducers/index"
import createSagaMiddleware from "redux-saga"
import helloSaga from "./sagas/sagas"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(helloSaga);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("fieldToShow")
);
