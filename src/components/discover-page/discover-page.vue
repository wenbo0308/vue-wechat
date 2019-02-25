<template>
    <div class="router-parent" style="background-color:#ededed">
        <ul class='dsc-parent'>
            <li v-for='(item,index) in list' :key='index'><span :style="{backgroundImage: 'url('+item.icon+')' }"></span><p>{{item.title}}</p>
                <p class="iconfont icon-goback arrow"></p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                list:[
                    {icon:require('../../common/image/d_f.png'),title:'朋友圈'},
                    {icon:require('../../common/image/d_s_2.png'),title:'扫一扫'},
                    {icon:require('../../common/image/d_s_1.png'),title:'搜一搜'},
                    {icon:require('../../common/image/d_p.png'),title:'附近的人'},
                    {icon:require('../../common/image/d_g.png'),title:'游戏'},
                    {icon:require('../../common/image/d_x.png'),title:'小程序'},
                ]
            }
        },
        methods: {},
        mounted(){
            this.$store.commit('getHeaderTitle','发现')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.dsc-parent
    width 100%
    height auto
    li
        height 51px
        background-color #fff
        border-top 1px solid #f4f4f4
        border-bottom 1px solid #f4f4f4
        margin-bottom 7px
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
            position absolute
            top 18px
            right 10px
            color #9a9a9a
            transform:rotate(180deg);
</style>
