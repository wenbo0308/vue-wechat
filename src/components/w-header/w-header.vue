<template>
    <div class="header">
        <div class="header-parent">
            <p class="">{{_title}}</p>
            <p class="iconfont icon-search" @click.stop='goSearch()'></p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: '',
        data () {
            return {}
        },
        computed:{
            ...mapState({
                _title:state=>state.title
            })
        },
        methods: {
            goSearch(){
                this.$router.push('/add');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .header
        position:fixed
        top: 0px
        left: 0px
        width:100%
        height: 45px
        background-color: #303030
    .header-parent 
        width 100%
        height 100%
        display flex
        justify-content space-between
        align-items center
        color #fff
        padding 0 15px 0 15px
        box-sizing border-box
        p
            height 16px
            line-height 16px
              
</style>
