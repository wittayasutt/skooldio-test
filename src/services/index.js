import axios from 'axios';

const $axios = axios.create();

export const getData = () => {
	return $axios
		.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
		.then((res) => {
			return res.data;
		});
};
