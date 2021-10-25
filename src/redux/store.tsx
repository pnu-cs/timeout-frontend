import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = (store: any) => (next: any) => (action: any) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const initMiddleware = () => [logger, sagaMiddleware];

const middlewares = initMiddleware();

const configureStore = () => {
    const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
