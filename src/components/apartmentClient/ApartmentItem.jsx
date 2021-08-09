import { useDispatch } from "react-redux";
import { deleteFlatClient } from "../../redux/actions/flat";

const ApartmentClientItem = (props) => {
	const dispatch = useDispatch();

	const onClientDelete = (client) => {
		const data = {
			...client,
	};

	dispatch(deleteFlatClient(data));
	};

	return (
	<>
			<p>
				<span>имя: {props.client.name}</span>
				<span>email: {props.client.email}</span>
				<span>телефон: {props.client.phone}</span>
			</p>
		<button className="client-button" onClick={() => onClientDelete(props.client)}>Удалить</button>
	</>
	);
};

export default ApartmentClientItem;
