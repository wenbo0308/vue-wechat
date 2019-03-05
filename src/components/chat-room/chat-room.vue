<template>
    <div class="cover-parent">
        <div class="dtl-header">
            <div class="dtl-h-cont">
                <p class="iconfont icon-goback" @click='goToBack()'></p><p>{{_name}}</p>
            </div>
        </div>
         <div class="chat-cont" id='chat-wrapper' ref='chat'>
            <div>
                 <div class='chat-child' v-for='(item,index) in arr' :key='index'>
                    <div class='chat-cont-right' v-if='item.type==="right"?true:false'>
                        <div class="user-cont">{{item.cont}}<span class="arrow_right"></span></div>
                        <div class="user-icon"></div>
                    </div>
                    <div class='chat-cont-left' v-if='item.type==="left"?true:false'>
                        <div class="user-icon"></div>
                        <div class="user-cont">{{item.cont}}<span class="arrow_left"></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <div class="chat-input-child">
                <!-- <div class="child-yuyin"></div>  -->
                <textarea class='child-text' v-model='chatCont'></textarea> 
                <!-- <div class='child-smile'></div> -->
                <!-- <div class='child-add' v-if='this.chatCont.length==0?true:false'></div> -->
                <div class="child-send" @click='sendMsg()'>发送</div>
            </div>
        </div>
        <alert-modal ref='modal' cont='数据加载中'></alert-modal>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import Bscroll from 'better-scroll'
    export default {
        name: '',
        data () {
            return {
                uid:this.$route.params.u_id,
                chatCont:'',
                show_1:false,
                arr:[]
            }
        },
        computed:{
            ...mapState({
                _name:state=>state.chatName
            })
        },
        methods: {
            _initScroll(){
                this.$nextTick(()=>{
                    this.scroll_chat = new Bscroll(this.$refs.chat,{probeType:3,click:true});                          
                })
            },
            goToBack(){
                 this.$destroy();
                this.$router.go(-1)
            },
            goToBottom(){
               let chatList = document.getElementsByClassName('chat-child');
               console.log('haha',chatList)
               setTimeout(()=>{
                this.scroll_chat.scrollToElement(chatList[chatList.length-1],300)
               },200)
               
            },
            getChatList(){
                let url = `/api/v1/getChatList?id=${this.uid}`;
                this.$axios.get(url).then(res=>{
                    if(res.data.status){
                        console.log(res.data.result);
                        this.arr = res.data.result;
                        this.$refs.modal.hide();
                    }
                }).catch(err => {
                    alert(JSON.stringify(err))
                })
            },
            initWs(){
                if('WebSocket' in window){
                    this.ws = new WebSocket('ws://172.17.114.76:3000/');
                    this.ws.onopen = (err) => {
                        if(err){console.log(`webSocket连接失败，${JSON.stringify(err)}`)};
                        console.log('webSocket连接成功');
                    }
                    this.ws.onmessage = this.receiveMsg;
                    this.ws.onclose = this.closeWS;
                }else{
                    alert('您的浏览器不支持 WebSocket！')
                }
            },
            sendMsg(){
                if(this.chatCont.length===0){return false}
                let reqData = {u_id:this.uid,cont:this.chatCont,type:'right'};
                this.ws.send(JSON.stringify(reqData));
                this.arr.push(reqData);
                this.goToBottom();
                this.chatCont = '';
            },
            receiveMsg(res){
                 let msg = JSON.parse(res.data);
                 msg.type = 'left';
                 this.arr.push(msg);
                 this.goToBottom();
            },
            closeWS(e){
                console.log("connection closed (" + e.code + ")");
            }
        },
        created(){
            this.initWs();
            // this.goToBottom();
        },
        mounted(){
            this.$refs.modal.show();
            this.getChatList();
            this._initScroll();
            this.goToBottom(); 
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .chat-cont
        width 100%
        height calc(100% - 90px)
        overflow hidden
        background-image url('../../common/image/chat_room_img.jpg')
        background-size cover
        background-position center center
        background-repeat no-repeat
        padding 0 10px
        box-sizing border-box
        padding-top 10px
        .chat-cont-right
            width 100%
            min-height 37px
            display flex 
            justify-content flex-end
            margin-bottom 10px
            .user-cont
                max-width 70%
                min-height 37px
                padding 11px 11px
                box-sizing border-box
                font-size 15px
                background-color #a1e85a
                border-radius 3px
                position relative
                .arrow_right
                    width 0
                    height 0
                    position absolute
                    top 13px
                    right -7px
                    border-top 4px solid transparent
                    border-left 8px solid #a1e85a
                    border-bottom 4px solid transparent
                    z-index 1
            .user-icon
                width 37px
                height 37px
                margin-left 10px
                border-radius 3px
                background-image url('../../common/image/icon_3.jpg')
                background-size contain
                background-position center center
                background-repeat no-repeat
        .chat-cont-left
            width 100%
            min-height 37px
            display flex 
            justify-content flex-start
            margin-bottom 10px
            .user-cont
                max-width 70%
                min-height 37px
                padding 11px 11px
                box-sizing border-box
                font-size 15px
                background-color #fff
                border-radius 3px
                position relative
                .arrow_left
                    width 0
                    height 0
                    position absolute
                    top 13px
                    left -7px
                    border-top 4px solid transparent
                    border-right 8px solid #fff
                    border-bottom 4px solid transparent
                    z-index 1
            .user-icon
                width 37px
                height 37px
                margin-right 10px
                border-radius 3px
                background-image url('../../common/image/icon_4.jpg')
                background-size contain
                background-position center center
                background-repeat no-repeat
            
    .chat-input
        width 100%
        height 45px
        background-color #fff
        position fixed
        bottom 0
        left 0
        .chat-input-child
            width 100%
            height 100%
            display flex
            justify-content flex-start
            align-items center
            padding 0 10px
            box-sizing border-box
            .child-yuyin,.child-smile,.child-add
                width 30px
                height 30px
                border-radius 50%
                border 1px solid #727377
                margin-right 10px
            .child-text
                display block
                width calc(100% - 55px)
                height 30px
                border none
                outline none
                border-bottom 1px solid #d8d8d8
                padding 7px 0px
                text-align left
                box-sizing border-box
                // line-height 30px
                font-size 16px
            .child-smile
                margin-left 10px
            .child-send
                width 45px
                height 30px
                text-align center
                line-height 30px
                font-size 14px
                color #fff
                background-color #1aad16
                border-radius 2px 
                margin-left 10px
</style>
