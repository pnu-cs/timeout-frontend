import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const logger = (store: any) => (next: any) => (action: any) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const initMiddleware = () => [logger, sagaMiddleware, routerMiddleware(history)];

const middlewares = initMiddleware();

const configureStore = () => {
    const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
