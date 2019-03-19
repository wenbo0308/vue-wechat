<template>
    <div class="footer">
        <div class="footer-parent">
            <router-link v-for='(item,index) in list' :key='index' tag="div" class="footer-item" :to="item.url" :active-class='"active-"+index'>
                <div class='footer-icon' :class='"unactive_"+index'></div>
                <div class="footer-link">{{item.ttl}}</div> 
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list:[
                    {url:'/wechat',ttl:'微信'},
                    {url:'/address',ttl:'通讯录'},
                    {url:'/discover',ttl:'发现'},
                    {url:'/my',ttl:'我'},
                ]
            }
        },
        watch: { 
        },
        methods: {
        }
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
        font-size: 11px
        color:#918d8e
        background-color #f7f7f7
        .footer-item
            flex 1
            text-align center
            height 100%
            overflow auto
            .footer-icon
                width 22px
                height 22px
                background-size contain
                background-position center center
                background-repeat no-repeat
                margin 5px auto
            .unactive_0
                background-image url('../../common/image/footer_1.png')
            .unactive_1
                background-image url('../../common/image/footer_2.png')
            .unactive_2
                background-image url('../../common/image/footer_3.png')
            .unactive_3
                background-image url('../../common/image/footer_4.png')
            .footer-link
                width 100%
                height 15px
            &.active-0
                color #49c122
                .unactive_0
                    background-image url('../../common/image/footer_g_1.png')!important
            &.active-1
                color #49c122
                .unactive_1
                    background-image url('../../common/image/footer_g_2.png')!important
            &.active-2
                color #49c122
                .unactive_2
                    background-image url('../../common/image/footer_g_3.png')!important
            &.active-3
                color #49c122
                .unactive_3
                    background-image url('../../common/image/footer_g_4.png')!important
                

</style>
