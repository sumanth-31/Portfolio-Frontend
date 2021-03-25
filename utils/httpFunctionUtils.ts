export function handleErrors(error) {
	console.log(error);
	let errorMessage = "ErrorOccured!";
	if (error.response) errorMessage += "\n" + error.response.data.message;
	alert(errorMessage);
}
