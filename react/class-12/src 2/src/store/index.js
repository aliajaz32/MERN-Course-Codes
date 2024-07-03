/*
Redux (hard)
vs
ContextAPI (easy)
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {
  store,
  persistor
}
/*
  1. npm i redux react-redux
  2. create store/index.js, store/reducers/index.js, store/actions/index.js
  3. create basic functions in reducers and actions
  and export them
  4. write configuration code for store/index.js
  5. Import Provider and store in App.js and wrap the code with that.
  6. 
*/

/*
  1. store
  2. store -> actions -> index.js
  3. store -> actions -> adAction.js
  4. store -> actions -> userAction.js
  5. store -> reducers -> adReducer.js
  6. store -> reducers -> userReducer.js
*/

/*
  1. store
  2. store -> ads -> adAction.js
  3. store -> ads -> adReducer.js
  4. store -> users -> userAction.js
  5. store -> users -> userReducer.js
*/