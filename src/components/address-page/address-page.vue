<template>
    <div class="router-parent fixed">
        <div class="new-friend-parent" @click='goToNew()'>
            <div class="new-icon"></div>
            <div class="new-name">新的朋友</div>
        </div>
        <div ref='letters' class="letter-wrapper">
            <ul class="letter-parent">
                <li class="letter-item" v-for="(item,index) in list" :key='item' @click='_clickLetter(index)'>
                    {{item}}
                </li>
            </ul>
        </div>
        <div ref='users' class="user-wrapper">
            <ul class="user-parent">
                <div v-for='item in user' :key='item.type' class='get_user_height' v-if='item.arr.length>0?true:false'>
                    <li class="user-letter-item" >
                        {{item.type}}
                    </li>
                    <li class="user-dtl-item" v-for='(_item,index) in item.arr' :key='index' @click.stop='_toDtl(_item,index)'>
                        <div class="user-icon" :style="{backgroundImage: 'url('+require('../../common/image/'+_item.icon)+')' }"></div>
                        <div class="user-name">{{_item.nickName}}</div>
                    </li>
                </div>
            </ul>
        </div>
         <alert-modal ref='modal' cont='数据加载中'></alert-modal>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'    
    import {getFriendList} from '../../../api/getData.js'

    export default {
        name: '',
        data () {
            return {
                user:[],
                list:[ 
                    "↑","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
                ],
                userHeight:[],
            }
        },
        methods: {
            _initScroll(){
                setTimeout(()=>{
                    this.scroll_user = new Bscroll(this.$refs.users,{probeType:3,click:true})
                    this.scroll_ltr = new Bscroll(this.$refs.letters,{click:true});
                },200)
            },
            _clickLetter(_index){
                let userList = document.getElementsByClassName('get_user_height');
                if(_index == 0 || _index == 1){
                    this.scroll_user.scrollToElement(userList[0],300)
                }else{
                    this.scroll_user.scrollToElement(userList[parseInt(_index)-1],300)

                }
            },
            _toDtl(obj,i){
                // alert(_id)
                this.$router.push({path:`/detailInfo/${obj.id}/chat`});
            },
            goToNew(){
                this.$router.push('/reqFriend')
            },
            getFriends(){
                getFriendList(this).then(res => {
                    if(res.data.status){
                        let _arr = res.data.result;
                        let userList = []
                        for(var item of this.list){
                            let obj = {type:null,arr:[]};
                            let str = item
                            for(var _item of _arr){
                                if(str == _item.type.toUpperCase()){
                                    obj.type = item;
                                    obj.arr.push(_item);
                                }
                            }
                            userList.push(obj);
                        }
                        this.user = userList
                        this.$refs.modal.hide();
                    }else{
                        alert('hh'+res.data.msg)
                    }
                }).catch(err => {
                    alert('hshs',JSON.stringify(err))
                })
            }

        },
        mounted(){
            this.$refs.modal.show();
            this._initScroll();
            this.getFriends();
            this.$store.commit('getHeaderTitle','通讯录')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .user-wrapper
        width 100%
        height 100%
        .user-parent
            .user-letter-item
                height 20px
                line-height 20px
                background-color #ebebeb
                padding-left 17px
                color #858585
                font-size 13px 
                text-align left 
            .user-dtl-item
                height 48px
                display flex
                flex-direction row
                align-items center
                padding-left 17px
                border-bottom 1px solid #f4f4f4
                box-sizing border-box
                .user-icon
                    width 33px
                    height 33px
                    // background-color red
                    margin-right 17px
                    background-size contain
                    background-position center center
                    background-repeat no-repeat
                .user-name
                    width 80%
                    height 48px
                    line-height 48px
                    font-size 14px
    .letter-wrapper
        position fixed
        width 15px
        height calc(100% - 95px)
        top 45px
        right 0px
        z-index 10
        //background-color rgba(191,191,191,0.5)
        text-align center
        .letter-parent
            // width 100%
            height 100%
            padding-top 5.5%
            // overflow hidden
            .letter-item
                height 3.7%
                display flex
                justify-content center
                align-items center
                font-size 11px
    .new-friend-parent
        height 48px
        display flex
        flex-direction row
        align-items center
        padding-left 17px
        border-bottom 1px solid #f4f4f4
        box-sizing border-box
        .new-icon
            width 33px
            height 33px
            // background-color red
            margin-right 17px
            background-image url('../../common/image/new_friend.png')
            background-size contain
            background-position center center
            background-repeat no-repeat
        .new-name
            width 80%
            height 48px
            line-height 48px
            font-size 14px
</style>
