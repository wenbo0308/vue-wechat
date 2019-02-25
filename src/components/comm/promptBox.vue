<template>
    <div class="prompt-parent" v-show='isHide' @click.stop.prevent="hide">
        <div class="prompt-child" :style="{top:topY+'px',left:leftX+'px'}" @click='delChat'>删除该聊天
        </div>
    </div>

</template>

<script>
    export default {
        name: '',
        props:{
            topY:String,
            leftX:String,
        },
        data () {
            return {
                isHide:false,
            }
        },
        methods: {
            show(){this.isHide = true},
            hide(){this.isHide = false},
            delChat(){
                this.$emit('showDelModal')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .prompt-parent
        position fixed
        top 0 
        bottom 0
        left 0
        right 0
        z-index 998
        .prompt-child
            width 100px
            height 30px
            background-color #f4f4f4
            position absolute
            z-index 1000
            font-size 13px
            line-height 30px
            padding-left 10px
            -webkit-box-shadow:0 0 10px rgba(0, 204, 204, .5);  
            -moz-box-shadow:0 0 10px rgba(0, 204, 204, .5);  
            box-shadow:0 0 10px rgba(0, 204, 204, .5);  
        
</style>
