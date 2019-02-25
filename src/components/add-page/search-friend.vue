<template>
    <div class="cover-parent">
         <div class="sch-header">
            <div class="sch-h-cont">
                <div class="iconfont icon-goback" @click="goBack()"></div>
                <p><input autocomplete="off" id='search' type="text" name="mobile" v-model='mobile'></p>
            </div>
        </div>
        <div class='sch-cont' v-if='mobile.length>0?true:false' @click='goToDtl()'>
            <div class="cont_1"></div>
            <div class="cont_2">搜索:</div>
            <div class="cont_3">{{mobile}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data () {
            return {
                mobile:''
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            goToDtl(){
                if(this.mobile.length ===11){
                    this.$router.push({path:`/detailInfo/${this.mobile}/add`});
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .cover-parent
        background-color #fff
    .sch-header
        width:100%
        height: 45px
        background-color #f2f2f2
        .sch-h-cont
            height 100%
            display flex
            justify-content flex-start
            align-items center
            color #fff
        .sch-h-cont p:last-child
                width 90%
        .iconfont
          margin-left 15px
          color #000
        input 
            width 100%
            border-bottom 1px solid #45c01a
            background-color #f2f2f2
            font-size 15px
        input:focus
            outline none
    .sch-cont
        width 100%
        height 58px
        padding 0 15px
        display flex
        justify-content flex-start
        align-items center  
        border-bottom 1px solid #f4f4f4
        box-sizing border-box
        .cont_1
            width 43px
            height 43px
            background-color #2ba245 
            border-radius 3px
            color #fff 
        .cont_2
            margin-left 10px
            font-size 15px
        .cont_3
            font-size 15px
            color #2ba245
        
</style>
