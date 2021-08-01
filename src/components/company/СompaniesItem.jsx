import { useDispatch, useSelector } from "react-redux";
import { getStreets } from "../../redux/actions/street";
import { toggleCompanies } from "../../redux/actions/company";
import Streets from "../street/Streets";

const СompaniesItem = (props) => {

	const selectedCompany = useSelector(state => state.companies.selectedCompany);
	const dispatch = useDispatch();

	const onCompanyClickHandler = (company) => {
		let data = {
			companyId: company.id
		};

	if (selectedCompany === company.id) {
		data = {
			companyId: null
		};

		dispatch(toggleCompanies(data));
	} else {
		dispatch(toggleCompanies(data));
		dispatch(getStreets(data));
	}
};

	return (
		<li className="companies-item">
			<p onClick={() => onCompanyClickHandler(props.company)}>Компания: {props.company.name}</p>
			{selectedCompany === props.company.id && <Streets />}
		</li>
	);
};

export default СompaniesItem;