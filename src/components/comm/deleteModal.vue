<template>
    <div class="del-parent" v-show='isHide'>
        <div class="del-modal">
            <div class="del-modal-1">
                <p class="del-modal-msg">删除后，将清空该聊天的消息记录</p>
                <div class="del-modal-btn">
                    <p @click='closeBox'>取消</p>
                    <p @click.stop='commitDel'>删除</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props:{
            isHide:Boolean,
            room:String
        },
        data () {
            return {
               
            }
        },
        methods: {
            closeBox(){
                this.$emit('closeModal')
            },
            commitDel(){
                alert(this.room)
                if(!this.room){
                    alert('error query data')
                }
                let url = `/api/v1/delchat?rId=`+this.room;
                this.$axios.get(url).then(res => {
                    if(res.data.status){
                        this.$emit('closeModal')
                    }
                }).catch(err=>{
                    alert(JSON.stringify(err))
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .del-parent
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background-color rgba(0,0,0,0.5)
        z-index 999
    .del-modal
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        .del-modal-1
            width 80%
            height auto
            background-color #fff
            border-radius 3px
            .del-modal-msg
                height 80px
                line-height 80px
                text-align center
                border-bottom 1px solid #f4f4f4
            .del-modal-btn
                height 40px
                display flex
                justify-content center
                align-items center
                p
                    width 50%
                    height 100%
                    line-height 40px
                    text-align center
                p:first-child
                    border-right 1px solid #f4f4f4
                p:last-child
                    color red
                    
            
    
</style>
