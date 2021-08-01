import { COMPANIES, COMPANIES_LOADED, COMPANIES_TOGGLE } from "../types";

const initialState = {
	allCompanies: [],
	selectedCompany: null,
	loaded: false
};

export const companies = (state = initialState, action)=> {

	switch (action.type) {

		case COMPANIES:
			return {...state, allCompanies: action.data, loaded: false};

		case COMPANIES_LOADED:
			return {...state, loaded: true};

		case COMPANIES_TOGGLE:
			return {...state, selectedCompany: action.data};

		default:
			return state;
	}
}
