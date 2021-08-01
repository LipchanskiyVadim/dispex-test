import { useSelector } from "react-redux";
import HouseItem from "./HouseItem";
import Loader from "../Loader";

const Houses = () => {
	const houses = useSelector((state) => state.houses.houses);
	const housesLoading = useSelector((state) => state.houses.loaded);

	return housesLoading ? <Loader /> : (
		<ul className="house-list">
			{houses.map((house) => (
				<HouseItem key={house.id} house={house} />
			))}
		</ul>
	);
};

export default Houses;
