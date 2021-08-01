import { useSelector, useDispatch } from "react-redux";
import { getApartments } from "../../redux/actions/flat";
import { toggleHouse } from "../../redux/actions/house";
import Apartments from "../apartments/apartments";

const HouseItem = ({ house }) => {
	const dispatch = useDispatch();
	const selectedHouse = useSelector(state => state.houses.selectedHouse);

	const onHouseClickHandler = (house) => {
		let data = {
			houseId: house.id
		};

	if (selectedHouse === house.id) {
		data = {
			houseId: null
		};

	dispatch(toggleHouse(data));
	} else {
		dispatch(toggleHouse(data));
		dispatch(getApartments(data));
		}
	};

	return (
		<li key={house.id} className="house-item">
			<p onClick={() => onHouseClickHandler(house)}>{`Дом № ${house.building}${
				house.corpus ? `, корпус ${house.corpus}` : ""
			}`}</p>
			{selectedHouse === house.id && <Apartments />}
		</li>
	);
};

export default HouseItem;
