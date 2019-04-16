<template>
    <div class="cover-parent">
       <div class="dtl-header">
            <div class="dtl-h-cont">
                <p class="iconfont icon-goback" @click='goBack()'></p><p>二维码名片</p>
            </div>
        </div>
        <div class="qr_cont">
            <div class='qr_parent'> 
                <div class='my_dtl'>
                    <div class='my_icon' :style="{backgroundImage: 'url('+require('../../common/image/'+myIcon)+')' }"></div>
                    <div class='my_info'>
                        <p>{{name}}</p>
                        <p>{{phone}}</p>
                    </div>
                </div>
                <div class="my_qr" id='qrcode' ref='qrcode'></div>
                <div class="my_commit">
                    扫一扫上面的二维码图案，加我微信
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'
    export default {
        name: '',
        data () {
            return {
                config:{
                    value:'http://www.baidu.com',
                    imagePath:this.$route.params.id,
                    filter:'color',
                },
                myIcon: localStorage.getItem('userIcon'),
                name: localStorage.getItem('name'),
                phone: localStorage.getItem('phone')
            }
        },
        computed:{
          
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            qrcode(){
                var self = this
                let qrcode = new QRCode('qrcode', {  
                    width: 247,  // 设置宽度 
                    height: 247, // 设置高度
                    text: self.$route.params.id
                })  
            }
        },
        components:{
           // VueQArt,
           QRCode,
        },
        mounted () {
            this.$nextTick (function () {
                this.qrcode()
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.qr_cont
    width 100%
    height 100%
    padding 0 13px
    box-sizing border-box
    position relative
    // display flex
    // justify-content center
    // align-items center
    .qr_parent
        width calc(100% - 26px)
        height 389px
        background-color #fff 
        padding 0 12px
        box-sizing border-box
        overflow hidden
        position absolute
        top 50%
        margin-top -215px
        .my_dtl
            width 100%
            height 58px
            display flex
            align-items center
            justify-content flex-start
            margin-top 12px
            margin-bottom 34px
            .my_icon
                width 58px
                height 58px
                border-radius 3px 
                margin-right 10px  
                background-size contain
                background-position center center
                background-repeat no-repeat
            .my_info
                height 42px
                p:first-child
                    font-size 15px
                    margin-bottom 10px 
                p:last-child
                    font-size 13px
                    color #a0a0a0 
        .my_qr
            width 247px
            height 247px
            margin 0 auto
        .my_commit
            font-size 13px
            color #a0a0a0 
            margin-top 15px
            margin-bottom 10px
            text-align center
</style>
