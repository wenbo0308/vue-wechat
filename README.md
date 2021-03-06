# 前言
项目初衷是想学习websocket实现双通道通信，一直以来对websocket知之甚少，网上查阅很多的资料也是没有完善的代码体系，与其依靠别人不如自己实现一个聊天功能
的项目，从而想通过自己的开发了解聊天的相关业务逻辑。该项目仿造的是微信客户端，主要实现的有登录，注册，添加好友，搜索好友，朋友列表左右联动.聊天，生成个人二维码等功能，其他功能还在逐步完善，希望在实现的过程中对个人的开发技术有所成长和帮助。
# 技术栈
vue-cli 3.0 + vue-router + vuex + webpack + stylus + better-scroll + qrcode + websocket
# 项目运行
## 本地开发环境
`npm run serve`
## 生产环境构建
`npm run build`
# 接口
该项目属于前后端分离项目，服务端接口是以node.js实现，已部署至个人云服务器中，拥有独立的域名  
[服务端代码Git地址请戳这里](https://github.com/wenbo0308/vue-wechat-serve)
# 效果演示
[查看demo](http://www.liwenbo.top)
# 演示截图
### 注册和登录
![](https://raw.githubusercontent.com/wenbo0308/vue-wechat/master/screenShots/logandreg.gif)
### 搜索添加好友
![](https://raw.githubusercontent.com/wenbo0308/vue-wechat/master/screenShots/add.gif)
### 确认好友
![](https://raw.githubusercontent.com/wenbo0308/vue-wechat/master/screenShots/confrim.gif)
### 聊天
![](https://raw.githubusercontent.com/wenbo0308/vue-wechat/master/screenShots/chat1.gif)
![](https://raw.githubusercontent.com/wenbo0308/vue-wechat/master/screenShots/chat2.gif)
### 二维码
![](https://raw.githubusercontent.com/wenbo0308/vue-wechat/master/screenShots/qrcode.gif)

# 项目结构
```
.
|——api
|  |——getData.js
|——public
|——src
|  |——assets
|  |——common
|  |  |——css
|  |  |——font
|  |  |——image
|  |  |——js
|  |——components
|  |  |——add-page
|  |  |  |——add-page.vue
|  |  |  |——search-friend.vue
|  |  |——address-page
|  |  |  |——address-page.vue
|  |  |  |——req-friend.vue
|  |  |——chat-room
|  |  |  |——chat-room.vue
|  |  |——comm
|  |  |  |——alertModal.vue
|  |  |  |——deleteModal.vue
|  |  |  |——promptBox.vue
|  |  |——detail-info
|  |  |  |——detail-info.vue
|  |  |——discover-page
|  |  |  |——discover-page.vue
|  |  |——footer
|  |  |  |——footer.vue
|  |  |——login-page
|  |  |  |——login-page.vue
|  |  |  |——register-page.vue
|  |  |——my-page
|  |  |  |——my-detail.vue
|  |  |  |——my-page.vue
|  |  |  |——qr-code.vue
|  |  |——w-header
|  |  |  |——w-header.vue
|  |  |——wechat-page
|  |  |  |——wechat-page.vue
|  |——methods
|  |  |——http.js
|  |  |——utils.js
|  |——router
|  |  |——index.js
|  |——App.vue
|  |——main.js
|——store
|  |——index.js
|  |——mutation.js
|——.gitignore
|——babel.config.js
|——package-lock.json
|——package.json
|——README.md
|——vue.config.js
```
