import { STREETS, STREETS_LOADING, STREETS_TOGGLE } from "../types";
import { sortStreets } from "../sortFunctions";

const initialState = {
	allStreets: [],
	selectedStreet: null,
	loaded: false
};

export const streets = (state = initialState, action) => {

	switch (action.type) {

		case STREETS:
			return {...state, allStreets: sortStreets(action.data), loaded: false};

		case STREETS_LOADING:
			return {...state, loaded: true};

		case STREETS_TOGGLE:
			return {...state, selectedStreet: action.data};

		default:
			return state;
	}
}
