<template>
    <div class="router-parent" style="background-color:#ededed">
        <div class='my_dtl'>
            <div class="my_icon"></div>
            <div class="my_info">
                <p class="my_name">{{user.nickName}}</p>
                <div class="my_phone">
                    <p>手机号：{{user.phone}}</p>
                    <p class="my_qrcode"></p>
                    <router-link tag='p' class="iconfont icon-goback arrow_1" to='/my/myDtl'></router-link>
                </div>    
            </div>
        </div>
        <ul class='my_func'>
            <li v-for='(item,index) in list' :key='index'><span :style="{backgroundImage: 'url('+item.icon+')' }"></span><p>{{item.title}}</p><p class="iconfont icon-goback arrow"></p></li>
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
                user:{},
                list:[
                    {icon:require('../../common/image/m_z.png'),title:'支付'},
                    {icon:require('../../common/image/m_s.png'),title:'收藏'},
                    {icon:require('../../common/image/m_x.png'),title:'相册'},
                    {icon:require('../../common/image/m_ka.png'),title:'卡包'},
                    {icon:require('../../common/image/m_b.png'),title:'表情'},
                    {icon:require('../../common/image/m_sh.png'),title:'设置'},
                ]
            }
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
            getMyInfo(){
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
            this.$store.commit('getHeaderTitle','我的');
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
    height 133px
    background-color #fff
    padding 0 15px
    display flex
    align-items center
    justify-content space-between
    box-sizing border-box
    .my_icon
        width 59px
        height 59px
        border-radius 5px
        background-color #abcdef
        margin-right 10px
    .my_info
        width 80%
        height 49px
        .my_name
            font-weight bolder
            margin-bottom 15px
        .my_phone
            display flex
            align-items center
            justify-content space-between
            font-size 12px
            color #838383
            position relative
            .my_qrcode
                width 12px
                height 12px
                background-image url('../../common/image/qr_icon.png')
                background-size contain
                background-position center center
                background-repeat no-repeat
                margin-right 10px
            .arrow_1
                font-size 12px
                position absolute
                top 0px
                right -5 px
                color #9a9a9a
                transform:rotate(180deg);
.my_func
    width 100%
    height auto
    margin-top 7px
    li
        height 51px
        background-color #fff
        border-bottom 1px solid #f4f4f4
        position relative
        display flex
        align-items center
        justify-content flex-start
        padding 0 10px
        span
            display block
            width 19px
            height 19px
            margin-right 15px
            background-size contain
            background-position center center
            background-repeat no-repeat 
        .arrow
            font-size 12px
            position absolute
            top 20px
            right 10px
            color #9a9a9a
            transform:rotate(180deg);
    li:first-child 
        margin-bottom 7px
    li:last-child
        margin-top 7px    
</style>
