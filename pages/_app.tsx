import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/colors.scss";
if (typeof window != "undefined") {
	require("popper.js");
	require("jquery");
	require("bootstrap");
	require("bootstrap/dist/js/bootstrap.js");
}
import axios from "axios";
axios.defaults.headers.post["Authorization"] =
	"Bearer " +
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyMDM2MDYxLCJqdGkiOiI2MDZmNDBmODI1OWU0MzdiYWJlNmQ2MmExNjhhZGY4MiIsInVzZXJfaWQiOjJ9.nNd0pHoUfqmelY3fmZqeq4n3D9znXZ5NehOmJxjwjdk";
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
