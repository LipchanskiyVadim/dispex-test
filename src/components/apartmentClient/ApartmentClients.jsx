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
		<li key={client.id} className="client-item">
			<ApartmentItem client={client} />
		</li>
		))}
		</ul>
	);
};

export default ApartmentClients;
