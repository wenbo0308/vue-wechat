<template>
    <div class="cover-parent">
        <div class="dtl-header">
            <div class="dtl-h-cont">
                <p class="iconfont icon-goback" @click='goBack()'></p><p>详细资料</p>
            </div>
        </div>
        <div class="user-dtl-1">
            <div class="user-icon" :style="{backgroundImage: 'url('+require('../../common/image/'+dtlIcon)+')' }"></div>
            <div class="user-info">
                <p ref='name'>{{dtl.nickName}}</p>
                <p>手机号：<span>{{dtl.phone}}</span></p>
            </div>
        </div>
        <div class="user-dtl-2">
            <div class="dtl-location">
                <p>地区</p>
            </div>
            <div class="dtl-photo">
                <p>个人相册</p>
            </div>
             <div class="dtl-more">
                <p>更多</p>
            </div>
        </div>
        <div class="msg-btn" v-if="!status" @click='goChatRoom()'>发消息</div>
        <div class="msg-btn" v-if="status" @click='add_friend()'>添加好友</div>
    </div>
</template>

<script>
    import {getFrdDtl,addFriend} from '../../../api/getData.js'
    // import {mapState} from 'vuex'   
    export default {
        name: '',
        data () {
            return { 
                status:this.$route.params.status=='add'?true:false,
                phone:this.$route.params.phone,
                dtl:{},
                myIcon:'icon_1.jpg',
                dtlIcon:this.$util.getDtlIcon()
            }
        },
        computed:{
            // ...mapState({
            //     _icon:state=>state.dtlIcon
            // })
        },
        methods: {
            goBack(){
                this.$destroy();
                this.$router.go(-1)
            },
            _myDtl(){
                getFrdDtl(this,this.phone).then(res => {
                    if(res.data.status){
                        this.dtl = res.data.result[0];
                    }
                }).catch(err=>{
                    alert(JSON.stringify(err))
                })
            },
            add_friend(){
                addFriend(this,{phone:this.phone,status:0}).then(res => {
                    if(res.data.status){
                        this.$router.go(-1);
                    }else{
                        alert(JSON.stringify(res.data.msg))
                    }
                }).catch(err => {                    
                    alert(JSON.stringify(err))
                });     
            },
            goChatRoom(){
                let cont = this.$refs.name.innerHTML
                if(!cont){return false}
                this.$store.commit('getChatName',cont)
                this.$router.push({path:`/chatRoom/${this.phone}`});
            }
        },
        mounted(){
            this._myDtl();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .user-dtl-1
        width 100%
        background-color #fff
        margin-top 17px
        padding 0 10px
        box-sizing border-box
        display flex
        justify-content flex-start
        align-items center
    .user-dtl-1
        height 81px
        .user-icon 
            width 59px
            height 59px
            background-size contain
            background-position center center
            background-repeat no-repeat
            margin-right 15px
            border-radius 5px
        .user-info p:first-child 
            margin-bottom 5px
        .user-info p:last-child
            color #acacac
    .user-dtl-2
        width 100%
        height 159px
        padding 0 10px
        background #fff
        margin-top 17px
        box-sizing border-box
        .dtl-location,.dtl-photo,.dtl-more           
            display flex
            justify-content flex-start
            align-items center
            border-bottom 1px solid #d7d7d7
            font-size 13px
        .dtl-location
            height 44px
        .dtl-photo
            height 70px
        .dtl-more
            height 45px 
            border none  
    .msg-btn
        width 80%
        height 46px
        line-height 46px
        color #fff
        text-align center
        margin 15px auto
        background-color #1AAD16
        border-radius 2px
</style>
