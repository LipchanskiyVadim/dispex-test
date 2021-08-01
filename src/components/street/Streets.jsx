import { useSelector } from "react-redux";
import StreetItem from "./StreetItem";
import Loader from "../Loader";

const Streets = () => {
	const streets = useSelector((state) => state.streets.allStreets);
	const streetsLoading = useSelector((state) => state.streets.loaded);

	return streetsLoading ? <Loader /> : (
		<ul className="streets-list">
			{streets.length ? (
				streets.map((street) => <StreetItem key={street.id} street={street} />)
			) : (
				<p>Улицы отсутствуют</p>
			)}
		</ul>
	);
};

export default Streets;
