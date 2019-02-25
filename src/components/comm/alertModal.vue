<template>
    <div class="process-parent" v-show='isHide'>
        <div class="process-modal" >
            <div class='p_m_p'>
                <div class='p_circle'></div>
                <p class="p_cont">{{cont}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props:{cont:String},
        data(){
            return {
                isHide:false
            }
        },
        methods: {
            show(){this.isHide = true},
            hide(){this.isHide = false},
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .process-parent
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        z-index 999
        .process-modal
            width 100%
            height 100%
            display flex
            justify-content center
            align-items center
            .p_m_p
                width 120px
                height 40px
                background rgba(0,0,0,0.4)
                border-radius 3px
                display flex
                justify-content center
                align-items center
            .p_circle
                width 14px
                height 14px
                border-radius 50%
                border 2px solid #e6e6e6
                border-left 1px solid transparent;
                animation circle_around 1s linear infinite running
            .p_cont
                font-size 14px
                color #e6e6e6
                margin-left 5px
            @keyframes circle_around {
                0% {
                    transform: rotate(120deg)
                }
                100% {
                    transform: rotate(-240deg)
                }
            }
</style>
