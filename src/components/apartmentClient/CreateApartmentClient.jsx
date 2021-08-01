import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFlatClient } from "../../redux/actions/flat";
import Loader from "../Loader";

const CreateApartmentClient = (props) => {
	const dispatch = useDispatch();
	const [loaded, setLoaded] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: ""
	});

	const { name, email, phone } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onClientAddFormSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			return alert("Поле Имя обязательная для заполнения");
		}

		if (!phone) {
			return alert("Поле Телефон обязательная для заполнения");
		}

		if (!email) {
			return alert("Поле Почта обязательная для заполнения");
		}

		let data = {
			Name: name,
			Email: email,
			Phone: phone,
			addressId: props.flat.addressId,
		};

		setLoaded(true);

		dispatch(createFlatClient(data)).then(res => {
			setLoaded(false);
		});

		setFormData({
			name: "",
			email: "",
			phone: "",
			});
	};

	return loaded ? (
		<Loader />
  ) : (
	<form action="" onSubmit={(e) => onClientAddFormSubmit(e)} className="client-form">
		<label htmlFor="name">Имя</label>
		<input
			id="name"
			type="text"
			name="name"
			value={name}
			onChange={(e) => onChange(e)}
			/>

			<label htmlFor="phone">Телефон</label>
			<input
			id="phone"
			type="text"
			name="phone"
			value={phone}
			onChange={(e) => onChange(e)}
			/>

			<label htmlFor="email">Почта</label>
			<input
			id="email"
			type="email"
			name="email"
			value={email}
			onChange={(e) => onChange(e)}
			/>

			<button type="submit">Добавить</button>
		</form>
	);
};

export default CreateApartmentClient;
