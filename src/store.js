import { createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restReducers";
const reducers=combineReducers({
    restaurantReducer:restaurantListReducer
})
const middleware=[thunk]
//to create a store
const store=createStore(reducers,applyMiddleware(...middleware));

export default store;