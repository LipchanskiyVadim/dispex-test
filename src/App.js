import { Provider } from "react-redux";
import store from "./redux/store";
import Companies from "./components/company/Сompanies";
import './index.scss';

const App = () => {
	return (
		<Provider store={store}>
			<Companies />
		</Provider>
	);
};

export default App;
