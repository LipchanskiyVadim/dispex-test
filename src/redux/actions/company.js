import { url } from "./baseURL";
import { COMPANIES, COMPANIES_LOADED, COMPANIES_TOGGLE } from "../types";
import axios from 'axios';


export const getCompanies = () => async (dispatch) => {

	dispatch({
		type: COMPANIES_LOADED,
	});

	axios.get(`${url}/Request/companies`)
		.then(res => {
			dispatch({
				type: COMPANIES,
				data: res.data
			});
	})
};

export const toggleCompanies = (data) => async (dispatch) => {
	dispatch({
		type: COMPANIES_TOGGLE,
		data: data.companyId
	});
};
