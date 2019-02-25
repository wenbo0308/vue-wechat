import Cookies from 'js-cookie'
import axios from 'axios'

axios.interceptors.request.use(
	config => {
		let token = Cookies.get('auth_token');
		config.data = JSON.stringify(config.data);
		config.headers = {
			'Content-type':'application/json'
		}
		if(token){
			config.headers.Authorization = 'Token '+token;
		}
		return config;
	},
	err => {
		return Promise.reject(err)
	}
)
axios.interceptors.response.use(
	response => {
		if(response.status == 401){
			this.$router.push('/login')
		}
		return response;
	},
	error => {
		return Promise.reject(error)
	}
)

export default axios