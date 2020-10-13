import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { reducer, rootSaga } from "./ducks"
import logger from 'redux-logger'

export default function configureStore( initialState ) {
    const sagaMiddleware = createSagaMiddleware();
    const store =  createStore(
      reducer,
      initialState,
      applyMiddleware(
        logger,
        sagaMiddleware
      ),
    );
    
    sagaMiddleware.run(rootSaga);

    return store
}