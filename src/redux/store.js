import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { companies } from "./reducers/companies";
import { streets } from "./reducers/streets";
import {houses } from "./reducers/houses";
import { apartments } from "./reducers/flat";

const reducer = combineReducers({
	companies,
	streets,
	houses,
	apartments
});

const store = createStore(
	reducer, applyMiddleware(thunk)
);

export default store;
