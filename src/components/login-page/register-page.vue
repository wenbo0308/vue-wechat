<template>
    <div class="cover-parent">
        <h3 class="login-title">手机号注册</h3>
        <div class="login-box">
            <div class='login-child'>
                <label for='nick_name'>昵称</label>
                <input ref='name' id='nick_name' type="text" name="name" v-model.trim='sumbitForm.nickName' placeholder="昵称字数限制16位"/>
            </div>
             <div class='login-child'>
                <label for='user_account'>手机号</label>
                <input ref='account' id='user_account' type="mobile" name="account" v-model.trim='sumbitForm.phone'/>
            </div>
            <div class='login-child'>
                <label for="user_pwd">密码</label>
                <input ref='pwd' id='user_pwd' type="password" name="pwd" v-model.trim='sumbitForm.pwd' 
                placeholder="6到18位包括大小写字母数字以及.或_"/>
            </div>
            <div class='login-child'>
                <label for="confirm_pwd">确认<br/>密码</label>
                <input ref='cpwd' id='confirm_pwd' type="password" name="c_pwd" v-model.trim='sumbitForm.c_pwd'/>
            </div>
        </div>
        <div class="submit-btn" @click='submit()'>注册</div>
        <div class='go_back' @click='goBack()'>x</div>
        <alert-modal ref='modal' cont='数据加载中'></alert-modal>
    </div>
</template>

<script>
    import {registerForm} from '../../../api/getData.js'

    export default {
        name: '',
        data () {
            return {
                sumbitForm: {
                    nickName: '',
                    phone: '',
                    pwd: '',
                    c_pwd: ''
                }
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            async _handleRegister(){
                try{
                    let status = await this.$util.checkRegForm(this);
                    if(status){
                        this.$refs.modal.show();
                        let self = this
                        registerForm(this,this.sumbitForm).then(res=>{
                            if(res.data.status){
                                self.$router.push('/login');
                            }else{
                                self.$refs.modal.hide()
                                alert(JSON.stringify(res.data.msg))
                            }
                        }).catch(err => {
                            self.$refs.modal.hide()
                            alert(JSON.stringify(err))
                        })
                    }
                }catch(err){
                    console.log(err);
                }
            },
            submit(){
                this._handleRegister();
            }
        },
        mounted(){
        //    demo()
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    .cover-parent
        padding 0px 15px 0 15px
        .login-title
            font-size 21px
            color #353535
            margin-top 74px
        .login-box
            width 100%
            height auto
            margin-top 40px
        .login-child
            height 55px
            display flex
            justify-content flex-start
            align-items center
            border-bottom 1px solid #DDD
            font-size 12px
            box-sizing border-box
            label
                width 60px
                display inline-block
                margin-right 15px
                text-align center
            input 
                display inline-block
                width 100%
                background #F2F2F2
                height 22px
                border none
            input:focus
                outline none
        .submit-btn
            width 100%
            height 44px
            background #1AAD19
            text-align center
            line-height 44px
            color #fff 
            margin-top 60px
            border-radius 3px     
    .go_back
        position absolute
        top 20px
        left 15px
        font-size 15px
        color #000
                
    
</style>
