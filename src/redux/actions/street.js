import { url } from "./baseURL";
import { STREETS, STREETS_LOADING, STREETS_TOGGLE } from "../types";
import axios from 'axios';

export const getStreets = (data) => async (dispatch) => {

	dispatch({
		type: STREETS_LOADING,
	});

	axios.get(`${url}/HousingStock?companyId=${data.companyId}`)
		.then(res => {
			dispatch({
				type: STREETS,
				data: res.data
			});
	})
};

export const toggleStreet = (data) => async (dispatch) => {
	dispatch({
		type: STREETS_TOGGLE,
		data: data.streetId,
	});
};
