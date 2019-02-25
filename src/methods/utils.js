import Cookies from 'js-cookie'

export const utils =  {
	getCookiesInClient: (key)=>{
		return Cookies.get(key)?Cookies.get(key):'';
	}
}