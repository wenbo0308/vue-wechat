import Cookies from 'js-cookie'

export default  {
	getCookiesInClient: (key)=>{
		return Cookies.get(key)?Cookies.get(key):'';
	},
	checkRegForm: async (_this) => {
		try{
			// const nameReg = /^[u4e00-u9fa5]{4,15}$/;
			const phoneReg = /^1[34578]\d{9}$/;
			const pwdReg = /^([a-zA-Z0-9]|[._]){6,18}$/;
			let status = true;
			if(_this.sumbitForm.nickName.length === 0 || _this.sumbitForm.nickName > 16) {
				_this.$refs.name.style.border = '1px solid red';
				status = false;
			}
			if(!phoneReg.test(_this.sumbitForm.phone)){
				_this.$refs.account.style.border = '1px solid red';
				status = false;
			}
			if(_this.sumbitForm.pwd !== _this.sumbitForm.c_pwd){
				_this.$refs.pwd.style.border = '1px solid red';
				_this.$refs.cpwd.style.border = '1px solid red'; 
				status = false;
			}
			if(!pwdReg.test(_this.sumbitForm.pwd)){
				_this.$refs.pwd.style.border = '1px solid red';
				status = false;
			}
			if(!pwdReg.test(_this.sumbitForm.c_pwd)){
				_this.$refs.cpwd.style.border = '1px solid red';
				status = false;
			}
			return status;
		}catch(err){
			throw err;
		}
	},
	setDtlIcon: (str) => {sessionStorage.setItem('dtl_icon',str)},
	getDtlIcon: () => sessionStorage.getItem('dtl_icon')
}
