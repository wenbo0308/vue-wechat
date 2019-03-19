<template>
    <div class="cover-parent">
        <div class="dtl-header">
            <div class="dtl-h-cont">
                <p class="iconfont icon-goback" @click='goBack()'></p><p>新的朋友</p>
            </div>
        </div>
        <div class="add_search_input" @click='goToSearch()'>
            <div class="iconfont icon-search"></div><p>微信号/QQ号/手机号</p>
        </div>
        <div class='req_f_title'>
            新的朋友
        </div>
        <ul class="new_friend_list">
            <li class="user-dtl-item" v-for='(item,index) in friend' :key='index'>
                <div class="user-icon"></div>
                <div class="user-name">{{item.nickName}}</div>
                <div class="accept-btn"  v-show='item.flag == 0 ?true:false' @click.stop='reqFriend(item.phone)'>接受</div>
                <div class="accept-btn" style="background:#fff;color:#a7a7a7"  v-show='item.flag == 1 ?true:false' >已添加</div>
            </li>   
        </ul>
    </div>
</template>

<script>
    import {getReqFrd,reqRrd} from '../../../api/getData.js'


    export default {
        name: '',
        data () {
            return {
                friend:[]
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            goToSearch(){
                this.$router.push('/searchFriend')
            },
            getReqFriend(){
                getReqFrd(this).then(res => {
                    if(res.data.status){
                        console.log(res.data.result)
                        this.friend = res.data.result;
                    }
                }).catch(err => {
                    alert(JSON.stringify(err))
                })
            },
            reqFriend(_val){
                let url = '/api/v1/add_friend';
                reqRrd(this,{phone:_val,status:1}).then(res => {
                    if(res.data.status){
                        this.$router.go(-1);
                    }else{
                        alert(JSON.stringify(res.data.msg))
                    }
                }).catch(err => {                    
                    alert(JSON.stringify(err))
                });     
            }
        },
        mounted(){
            this.getReqFriend();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .add_search_input
        width 100%
        height 38px
        display flex 
        justify-content flex-start
        align-items center
        background #fff
        margin-top 15px
        .iconfont
            margin-right 15px
            margin-left 15px
            font-size 18px
            color #B0B0B0
        p
            font-size 14px
            color #c1c1c1
    .req_f_title
        width 100%
        height 32px
        padding-left 15px
        padding-bottom 5px
        display flex
        box-sizing border-box
        text-align left
        color #818181
        font-size 14px
        align-items flex-end
    .new_friend_list
        height calc(100% - 130px)
        box-sizing border-box
        background-color #fff
        overflow auto
        .user-dtl-item
            height 48px
            display flex
            flex-direction row
            align-items center
            position relative
            border-bottom 1px solid #f4f4f4
            box-sizing border-box
            .user-icon
                width 33px
                height 33px
                background-color red
                margin:0 15px
            .user-name
                width 50%
                height 48px
                line-height 48px
                font-size 14px
            .accept-btn
                width 38px
                height 24px
                position absolute
                right 15px
                top 12px
                background-color red
                color #fff
                font-size 12px
                text-align center
                line-height 24px
                border-radius 3px
    .added
        color #a7a7a7
        background-color #fff
</style>
