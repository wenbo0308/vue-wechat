/**
 * Created by Lee Wenbo on 2018/11/20.
 */
import Vue from 'vue'
import Router from 'vue-router'
import {utils} from '../methods/utils.js'

import loginPage from '../components/login-page/login-page'
import registerPage from '../components/login-page/register-page'
import wechatPage from '../components/wechat-page/wechat-page.vue'
import addressPage from '../components/address-page/address-page.vue'
import discoverPage from '../components/discover-page/discover-page'
import dtlInfo from '../components/detail-info/detail-info'
import myPage from '../components/my-page/my-page.vue'
import chatRoom from '../components/chat-room/chat-room'
import addPage from '../components/add-page/add-page'
import searchFriend from '../components/add-page/search-friend.vue'
import reqFriend from '../components/address-page/req-friend.vue'
import myDtl from '../components/my-page/my-detail'
import qrCode from '../components/my-page/qr-code'

Vue.use(Router);
var router =  new Router({
    routes: [
        {
            path: '/',
            redirect: '/wechat'
        },
        {
            path: '/login',
            component: loginPage
        },
        {
            path: '/register',
            component: registerPage
        },
        {
            path: '/wechat',
            component: wechatPage
        },
        {
            path: '/address',
            component: addressPage
        },
        {
            path: '/discover',
            component: discoverPage
        },
        {
            path: '/my',
            component: myPage,
            children:[
                {
                    path:'myDtl',
                    component:myDtl,
                    children:[{
                        path: 'qrCode/:id',
                        component: qrCode
                    }]
                }
            ]
        },
         {
            path: '/detailInfo/:phone/:status',
            component: dtlInfo
        },
        {
            path: '/chatRoom/:u_id',
            component: chatRoom
        },
        {
            path: '/add',
            component: addPage
        },
        {
            path: '/searchFriend',
            component: searchFriend
        },
        {
            path: '/reqFriend',
            component: reqFriend
        }
    ]
})

router.beforeEach((to,from,next)=>{
    let url = to.path;
    if(url == '/login' || url == '/register'){
       next();
    }else{
        let token = utils.getCookiesInClient('auth_token');
        if(!token){
            next({path:'/login'})
        }
        next();
    }
})
export default router;