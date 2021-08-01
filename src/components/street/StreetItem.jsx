import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "../../redux/actions/house";
import { toggleStreet } from "../../redux/actions/street";
import Houses from "../house/Houses";

const StreetItem = (props) => {
	const dispatch = useDispatch();
	const selectedStreet = useSelector((state) => state.streets.selectedStreet);

	const onStreetClickHandler = (street) => {
		let data = {
		streetId: props.street.id,
	};

	if (selectedStreet === street.id) {
		data = {
			streetId: null,
		};

		dispatch(toggleStreet(data));
	} else {
		dispatch(toggleStreet(data));
		dispatch(getHouses(data));
	}
};

	return (
		<li className="streets-item">
			<p onClick={() => onStreetClickHandler(props.street)}>Улица {props.street.name}</p>
			{selectedStreet === props.street.id && <Houses />}
		</li>
	);
};

export default StreetItem;
