import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../redux/actions/company";
import СompaniesItem from "./СompaniesItem";
import Loader from "../Loader";

const Companies = () => {

	const companies = useSelector((state) => state.companies.allCompanies);
	const companiesLoading = useSelector((state) => state.companies.loaded);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCompanies());
	}, [dispatch]);

  return companiesLoading ? <Loader /> : (
	<ul className="companies-list">
		{companies?.map((company) => (
		<СompaniesItem key={company.id} company={company} />
		))}
	</ul>
	);
};

export default Companies;
