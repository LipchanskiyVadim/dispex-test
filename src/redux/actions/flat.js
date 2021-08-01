import { url } from "./baseURL";
import axios from 'axios';
import { APARTMENTS, APARTMENTS_LOADING, CREATE_APARTMENTS_CLIENT,
	DELETE_APARTMENTS_CLIENT, APARTMENTS_TOGGLE } from"../types";

const config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			Accept: "application/json"
	}
};

export const getApartments = (data) => async (dispatch) => {
	dispatch({
		type: APARTMENTS_LOADING,
	});

	axios.get(`${url}/HousingStock?houseId=${data.houseId}`)
	.then(res => {
		dispatch({
			type: APARTMENTS,
			data: res.data
		});
	})
};

export const createFlatClient = (data) => async (dispatch) => {

	let response = await fetch(`${url}/HousingStock/client`, {
		method: "POST",
		body: JSON.stringify(data),
		...config,
	});

	let result = await response.json();

	await fetch(`${url}/HousingStock/bind_client`, {
		method: "PUT",
		body: JSON.stringify({
			AddressId: data.addressId,
			ClientId: result.id,
		}),
		...config,
	});

	response = await fetch(`${url}/HousingStock/client?phone=${data.Phone}`);

	result = await response.json();

	const payloadData = {
		addressId: data.addressId,
		client: result
	};

	dispatch({
		type: CREATE_APARTMENTS_CLIENT,
		data: payloadData
	});
};

export const deleteFlatClient = (data) => async (dispatch) => {
	
	await fetch(`${url}/HousingStock/bind_client/${data.bindId}`, {
		method: "DELETE",
		...config
	});

	dispatch({
		type: DELETE_APARTMENTS_CLIENT,
		data: data
	});
};

export const toggleFlat = (data) => (dispatch) => {
	dispatch({
		type: APARTMENTS_TOGGLE,
		data: data.addressId
	});
};
