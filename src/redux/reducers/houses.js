import { HOUSES, HOUSES_LOADING, HOUSES_TOGGLE } from "../types";
import { sortHouses } from "../sortFunctions";

const initialState = {
	houses: [],
	selectedHouse: null,
	loaded: false
};

export const houses = (state = initialState, action) => {

	switch (action.type) {

		case HOUSES:
			return {...state, houses: sortHouses(action.data), loaded: false};

		case HOUSES_LOADING:
			return { ...state, loaded: true };

		case HOUSES_TOGGLE:
			return {...state, selectedHouse: action.data};

		default:
			return state;
	}
}
