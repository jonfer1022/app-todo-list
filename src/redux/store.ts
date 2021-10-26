import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from "./reducer"
import epics from "./epics";

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

// Constante para configurar la extensión DevRedux Tools de google Chrome 
const composeEnhancers = compose;

export default function generateStore(){
  const epicMiddleware = createEpicMiddleware()
  
  const store = createStore(
    persistedReducer, 
    composeEnhancers( 
      applyMiddleware(
        thunk, 
        routerMiddleware(history),
        epicMiddleware
      )
    ),
  );
  
  epicMiddleware.run(epics)

  let persistor = persistStore(store);

  return { store, persistor };
}