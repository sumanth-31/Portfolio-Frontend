import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/colors.scss";
import axios from "axios";
import { Provider } from "react-redux";
import { configureStore } from "@Utils/index";
if (typeof window != "undefined") {
	require("popper.js");
	require("jquery");
	require("bootstrap");
	require("bootstrap/dist/js/bootstrap.js");
}
if (typeof window != "undefined") {
	const appStorage = localStorage;
	if (appStorage.getItem("token"))
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + appStorage.getItem("token");
}
const store = configureStore({});
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
