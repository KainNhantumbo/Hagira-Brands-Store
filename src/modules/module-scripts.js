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

export const incomeMessages = [
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: 'sodijfsoidfoisdf',
		message: 'asdjaosjda',
		phone: '4984612646',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asd342asndamsd',
	},
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: 'sodijfsoidfoisdf',
		message: 'asdjaosjda',
		phone: '4984651651',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asdkna768sndamsd',
	},
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: 'sodijfsoidfoisdf',
		message: 'asdjaosjda',
		phone: '84984984984',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asdknas23412ndamsd',
	},
	{
		subject: 'ioasjdoiajsdjapsojdpoasd',
		email: '',
		message: 'asdjaosjda',
		phone: '89798465146',
		date: { date: '12-12-2022', time: '12:30' },
		_id: 'asdknasnda890890msd',
	},
];
