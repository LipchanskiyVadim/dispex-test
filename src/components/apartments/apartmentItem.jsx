import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFlat } from "../../redux/actions/flat";
import CreateApartmentClient from "../apartmentClient/CreateApartmentClient";
import ApartmentClients from "../apartmentClient/ApartmentClients";

const ApartmentItem = (props) => {
	const dispatch = useDispatch();
	const selectedFlat = useSelector((state) => state.apartments.selectedFlat);
	const [openModal, setOpenModal] = useState(false);
	const [clientAdd, setClientAdd] = useState(false);

	const onClick = () => {
		const data = {
			addressId: props.flat.addressId,
		};

	dispatch(toggleFlat(data));
	setOpenModal(true);
	};

	const onClose = () => {
		setOpenModal(false);
	};

	const onClientAdd = () => {
		setClientAdd(true);
	};

	return (
	<>
		<li className="apartment-list">
			<p onClick={() => onClick()}>Квартира {props.flat.flat}</p>
		</li>

		{openModal && selectedFlat === props.flat.addressId && (
			<div className="clients-list">
				<div className="modal-header">
					<button className="apartment-button" onClick={() => onClose()}>Закрыть</button>
				</div>
				<button className="apartment-button" onClick={() => onClientAdd()}>Добавить</button>

				{clientAdd && <CreateApartmentClient flat={props.flat} />}

				<ApartmentClients flat={props.flat} />
			</div>
		)}
	</>
	);
};

export default ApartmentItem;
