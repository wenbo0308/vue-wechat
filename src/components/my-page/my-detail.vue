<template>
    <div class="cover-parent">
       <div class="dtl-header">
            <div class="dtl-h-cont">
                <p class="iconfont icon-goback" @click='goBack()'></p><p>个人信息</p>
            </div>
        </div>
        <ul class='my_dtl'>
            <li style="height:74px">
                <div class='my_dtl_c'>
                    <p>头像</p>
                    <div class='my_icon'></div>
                </div>
                 <div class="iconfont icon-goback arrow_1" style="top:32px"></div>
            </li>
             <li>
                <div class='my_dtl_c'>
                    <p>昵称</p>
                    <div class='my_text'>{{user.nickName}}</div>
                </div>
                 <div class="iconfont icon-goback arrow_1"></div>
            </li>
            <li>
                <div class='my_dtl_c'>
                    <p>手机号</p>
                    <div class='my_text'>{{user.phone}}</div>
                </div>
                 <div class="iconfont icon-goback arrow_1"></div>
            </li>
             <li>
                <div class='my_dtl_c'>
                    <p>二维码名片</p>
                    <div class="my_qrcode"></div>
                </div>
                 <router-link tag='div' to='/my/myDtl/qrCode/24235534534' class="iconfont icon-goback arrow_1"></router-link>
            </li>
             <li>
                <div class='my_dtl_c'>
                    <p>更多</p>
                </div>
                 <div class="iconfont icon-goback arrow_1"></div>
            </li>
             <li>
                <div class='my_dtl_c'>
                    <p>我的地址</p>
                </div>
                <div class="iconfont icon-goback arrow_1"></div>
            </li>
        </ul>
         <transition :name='slide_mode' :duration="{ enter: 500, leave: 800 }" >
            <!-- <keep-alive> -->
                <router-view class='child-view'></router-view>
            <!-- </keep-alive> -->
        </transition>
    </div>
</template>

<script>
    import {getMyDtl} from '../../../api/getData.js'

    export default {
        name: '',
        data () {
            return {
                slide_mode:'slide-left',
                user:{}
            }
        },
        computed:{
           
        },
         watch: {
            '$route' (to, from) {
                console.log('haha',to.path)
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.slide_mode = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            getMyInfo(){
                let url = `/api/v1/getMyInfo`;
                getMyDtl(this).then(res => {
                    if(res.data.status){
                        console.log(res.data.result);
                        this.user = res.data.result;
                        // this.$refs.modal.hide()
                    }
                }).catch(err=>{
                    alert(JSON.stringify(err))
                })               
            }
        },
        mounted(){
            this.getMyInfo();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.child-view
  transition all .3s 
.slide-left-enter,.slide-right-leave-active
  // opacity 0
  -webkit-transform translate(100%,0)
  transform translate(100%,0)
.slide-left-leave-active,.slide-right-enter
  -webkit-transform translate(-100%,0)
  transform translate(-100%,0)
  opacity 0
.my_dtl
    width 100%
    height auto
    padding-left 15px
    background-color #fff
    li
        width calc(100% - 15px)
        height 51px
        border-bottom 1px solid #f2f2f2
        position relative
        .my_dtl_c
            height 100%
            display flex
            align-items center
            justify-content space-between
            font-size 15px
            .my_icon
                width 59px
                height 59px
                border-radius 3px
                margin-right 25px
                background-image url('../../common/image/icon_3.jpg')
                background-size contain
                background-position center center
                background-repeat no-repeat
            .my_text
                margin-right 25px
                text-align right
                color #b2b2b2
            .my_qrcode
                width 15px
                height 15px
                background-image url('../../common/image/qr_icon.png')
                background-size contain
                background-position center center
                background-repeat no-repeat
                margin-right 25px
        .arrow_1
            font-size 12px
            position absolute
            top 20px
            right 10px
            color #9a9a9a
            transform:rotate(180deg);
            
</style>
