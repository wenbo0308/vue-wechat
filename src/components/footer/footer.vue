<template>
    <div class="footer">
        <div class="footer-parent">
            <router-link tag="div" class="footer-item" to="/wechat">
                <span class="footer-link">微信</span>
            </router-link>
            <router-link tag="div" class="footer-item" to="/address">
                <span class="footer-link">通讯录</span>
            </router-link>
            <router-link tag="div" class="footer-item" to="/discover">
                <span class="footer-link">发现</span>
            </router-link>
            <router-link tag="div" class="footer-item" to="/my">
                <span class="footer-link">我</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
 .footer
    width:100%
    height:50px
    position:fixed
    bottom:0px
    border-top 1px solid #f1f1f1
    box-sizing border-box
    .footer-parent
        display: flex
        height: 50px
        line-height: 50px
        font-size: 11px
        color:#918d8e
        background-color #fff
        .footer-item
            flex: 1
            text-align: center
            .footer-link
                padding-bottom: 5px
            &.router-link-active
             .footer-link
                color:#49c122

</style>
