import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/colors.scss";
import { Provider } from "react-redux";
import { configureStore, configureAxios } from "@Utils/index";
import { INITIAL_STATE } from "@Constants/index";
if (typeof window != "undefined") {
	require("popper.js");
	require("jquery");
	require("bootstrap");
	require("bootstrap/dist/js/bootstrap.js");
}
const store = configureStore(INITIAL_STATE);
function MyApp({ Component, pageProps }) {
	configureAxios();
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
