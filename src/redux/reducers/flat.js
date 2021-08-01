import { APARTMENTS, APARTMENTS_LOADING, CREATE_APARTMENTS_CLIENT,
	DELETE_APARTMENTS_CLIENT, APARTMENTS_TOGGLE} from "../types";

const initialState = {
	flats: [],
	loaded: false,
	loadedClient: false,
	selectedFlat: null
};

export const apartments = (state = initialState, action) => {

	switch (action.type) {

		case APARTMENTS:
			return {...state, flats: action.data, loaded: false};

		case APARTMENTS_LOADING:
			return {...state, loaded: true};

		case CREATE_APARTMENTS_CLIENT:
			return {...state, flats: state.flats.map(flat => {
				if (flat.addressId !== action.data.addressId) {
 					return {...flat};
				}
				return { ...flat,
					clients: [...flat.clients, action.data.client]
				};
			}),
			loaded: false};

		case DELETE_APARTMENTS_CLIENT:
			return {
				...state,
				flats: state.flats.map(flat => ({
				...flat,
				clients: flat.clients.filter(
				client => client.bindId !== action.data.bindId
			)
		})),
		loaded: false};

		case APARTMENTS_TOGGLE:
			return {...state, selectedFlat: action.data};

		default:
			return state;
	}
}
