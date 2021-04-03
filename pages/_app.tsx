import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/colors.scss";
import { Provider } from "react-redux";
import { configureStore, configureAxios } from "@Utils/index";
if (typeof window != "undefined") {
	require("popper.js");
	require("jquery");
	require("bootstrap");
	require("bootstrap/dist/js/bootstrap.js");
}
configureAxios();
const store = configureStore({});
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
