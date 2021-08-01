import React from "react";

import ApartmentItem from "./ApartmentItem";

const ApartmentClients = (props) => {
	return !props.flat.clients.length ? (
		<p>
			<strong>Жильцов нет</strong>
		</p>
) : (
		<ul className="client-wrap">
			{props.flat.clients.map(client => (
			<ApartmentItem client={client} />
		))}
		</ul>
	);
};

export default ApartmentClients;
