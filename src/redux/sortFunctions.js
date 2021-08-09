/* street sorting */
export const sortStreets = (array)=> {
	const uniqueData = [];
	const uniqueStreets = [];

	array.forEach(list => {
		if(!uniqueData.includes(list.streetName)) {
			uniqueData.push(list.streetName);
			uniqueStreets.push({name: list.streetName, id: list.streetId});
			}})

		return uniqueStreets;
}

/* houses sorting */
export const sortHouses = (array)=> {
	const uniqueData = [];
	const uniqueHouses = [];

	array.forEach(list => {
		if(!uniqueData.includes(list.houseId)) {
			uniqueData.push(list.houseId);
			uniqueHouses.push({building: list.building,
				id: list.houseId, corpus: list?.corpus});
			}})

		return uniqueHouses;
}
