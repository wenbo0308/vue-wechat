<template>
    <div class="router-parent">
		<div ref='list' class="index-wrapper">
            <ul class='index-parent'>
                <li  v-for='(item,index) in chatList' :key='index' > 
                    <v-touch tag='div' class="index-item" @tap='_goToChatroom(item.to_user,item.nickName)' @press='promptModal($event,item.r_id)'>
                        <div class="item_icon" :style="{backgroundImage: 'url('+require('../../common/image/'+item.icon)+')'}">
                            <div class="msg_hint" v-show="item.status == 0?true:false"></div>
                        </div>
                        <div class="item_user_info">
                            <p class="item_name">{{item.nickName}}</p>
                            <p class="item_desc">{{item.cont}}</p>
                        </div>
                    </v-touch>
                </li>
            </ul>   
        </div>
        <alert-modal ref='modal' cont='数据加载中'></alert-modal>
        <prompt-box ref='prompt' :topY='p_y' :leftX='p_x' v-on:showDelModal='showDelBox'></prompt-box>
        <del-modal v-on:closeModal='closeDelBox' :isHide='isShow' :room='r_id'></del-modal>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import promptBox from '../comm/promptBox'
    import delModal from '../comm/deleteModal'  
    export default {
        name: '',
        data () {
            return {
                chatList:[],
                p_x:'',
                p_y:'',
                r_id:'',
                isShow:false
            }
        },
        methods: {
            showDelBox(){
                this.isShow = true;
            },
            closeDelBox(){
                this.isShow = false;
            },
             _initScroll(){
                this.$nextTick().then(()=>{
                    this.scroll_list = new Bscroll(this.$refs.list,{probeType:3})
                })
            },
            _getRoomList(){
                let url = `/api/v1/getRoomList`;
                this.$axios.get(url).then(res => {
                    if(res.data.status){
                        console.log(res.data.result);
                        this.chatList = res.data.result;
                        this.$refs.modal.hide()
                    }
                }).catch(err=>{
                    alert(JSON.stringify(err))
                })
            },
            _goToChatroom(_id,name){
                this.$store.commit('getChatName',name)
                this.$router.push({path:`/chatRoom/${_id}`});
            },
            promptModal(ele,_rid){
                console.log(ele)
                console.log(_rid)
                let _w = document.body.clientWidth;
                let _h = document.body.clientHeight;
                if(parseInt(ele.center.x)+100>=_w){
                     this.p_x = (parseInt(ele.center.x-100)).toString()
                }else{
                    this.p_x = (parseInt(ele.center.x)).toString();
                }
                if(parseInt(ele.center.y)+30>=_h){
                    this.p_y = parseInt(ele.center.y-30).toString();
                }else{
                     this.p_y = parseInt(ele.center.y).toString();
                }
                this.$refs.prompt.show();
                this.r_id = _rid
            },
            submitDel(){
                this.isShow = false;
            }
        },
        components:{
            'prompt-box': promptBox,
            'del-modal':delModal
        },
        mounted(){
            this.$refs.modal.show()
            this._initScroll();
            this._getRoomList();
            this.$store.commit('getHeaderTitle','微信')

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .index-wrapper
        width 100%
        height 100%
        // background-color #abcdef
        .index-parent
            .index-item
                height 59px
                box-sizing border-box
                background #fff
                border-bottom 1px solid #e6e6e6
                display flex
                align-items center
                justify-content flex-start
            .index-item:hover
                font-size 20px
                background-color #abcdee 
            .item_icon
                width 44px
                height 44px
                background #abcdee 
                margin-left 15px
                position relative
                border-radius 4px
                background-image url('../../common/image/icon_3.jpg')
                background-size contain
                background-position center center
                background-repeat no-repeat
                .msg_hint
                    width 8px
                    height 8px
                    border-radius 50%
                    position absolute
                    top -2px
                    right -2px
                    background-color red
                    
            .item_user_info
                width 65%
                height 35px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                margin-left 15px
                .item_name
                    height 16px
                    color #313035
                    font-size 14px
                    line-height 16px
                    margin-bottom 5px
                .item_desc
                    height 14px
                    color #989898
                    font-size 12px
                    line-height 14px
</style>
