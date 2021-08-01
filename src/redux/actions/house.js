import { url } from "./baseURL";
import {HOUSES, HOUSES_LOADING, HOUSES_TOGGLE } from "../types";
import axios from 'axios';

export const getHouses = (data) => async (dispatch) => {

	dispatch({
		type: HOUSES_LOADING
	});

	axios.get(`${url}/HousingStock?streetId=${data.streetId}`)
		.then(res => {
			dispatch({
				type: HOUSES,
				data: res.data
		});
	})
};

export const toggleHouse = data => async (dispatch) => {
	dispatch({
		type: HOUSES_TOGGLE,
		data: data.houseId,
	});
};
