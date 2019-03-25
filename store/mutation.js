export default {
	getHeaderTitle(state,_t){
		state.title = _t;
	},
	getChatName(state,name){
		state.chatName = name;
	},
	getUserDtl(state,obj){
		state.icon = obj.icon;
	},
	getDtlIcon(state,img){
		state.dtlIcon = img
	}
}