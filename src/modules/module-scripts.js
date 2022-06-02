// returns a atual date and time
export const createDate = () => {
	const date = new Date()
		.toLocaleDateString()
		.slice(0, 10)
		.split('/')
		.join('-');
	const time = new Date().toLocaleTimeString().slice(0, 5);
	return { date, time };
};