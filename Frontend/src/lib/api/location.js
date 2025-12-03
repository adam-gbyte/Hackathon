import { api } from './client.js';

export const postLocation = async (lat, lon) => {
	const res = await api.post('/location', { lat, lon });
	return res.data;
};

export const getLocation = async () => {
	const res = await api.get('/location');
	return res.data;
};
