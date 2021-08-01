import { useSelector } from "react-redux";
import ApartmentItem from "./apartmentItem";
import Loader from "../Loader";

const Apartments = () => {
	const flats = useSelector((state) => state.apartments.flats);
	const flatLoading = useSelector((state) => state.apartments.loaded);

	return flatLoading ? <Loader />: (
		<ul className="apartment-list">
			{flats.map((flat) => (
				<ApartmentItem key={flat.addressId} flat={flat} />
			))}
		</ul>
	);
};

export default Apartments;
