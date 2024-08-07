import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducers } from "./root-reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV != 'production' && logger].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);


export const persistor = persistStore(store);