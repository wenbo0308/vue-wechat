//提交注册表单
export const registerForm = (app,obj) => app.$axios.post('/api/v1/register',obj);
//提交登录表单
export const loginForm = (app,obj) => app.$axios.post('/api/v1/login',obj);
//获取房间列表
export const getRoomList = (app) => app.$axios.get('/api/v1/getRoomList');
//获取聊天记录
export const getTalkList = (app,uid) => app.$axios.get(`/api/v1/getChatList?id=${uid}`);
//获取好友列表
export const getFriendList = (app) => app.$axios.get('/api/v1/getMyFriend');
//获取请求好友
export const getReqFrd = (app) => app.$axios.get('/api/v1/get_req_friend');
//提交请求好友
export const reqRrd = (app,obj) => app.$axios.post('/api/v1/add_friend',obj);
//获取我的详情
export const getMyDtl = (app) => app.$axios.get('/api/v1/getMyInfo');
//获取朋友详情
export const getFrdDtl = (app,_phone) => app.$axios.get(`/api/v1/getFriendDtl?id=${_phone}`);
//添加朋友
export const addFriend = (app,obj) => app.$axios.post('/api/v1/add_friend',obj);