<template>
    <div class="cover-parent">
         <div class="dtl-header">
            <div class="dtl-h-cont">
                <p class="iconfont icon-goback" @click="goBack()"></p><p>添加朋友</p>
            </div>
        </div>
        <div class="add_search_input" @click='goToSearch()'>
            <div class="iconfont icon-search"></div><p>微信号/QQ号/手机号</p>
        </div>    
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {}
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            goToSearch(){
                this.$router.push('/searchFriend')
            }
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
        
</style>
