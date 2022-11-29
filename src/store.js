import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import registerReducer from './reducers/index'


const middleware = applyMiddleware(thunk)

const store = createStore(registerReducer,middleware)



export default store;