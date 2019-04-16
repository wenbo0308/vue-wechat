<template>
    <div class="cover-parent">
        <h3 class="login-title">手机号登录</h3>
        <div class="login-box">
            <div class='login-child'>
                <label for='user_account'>手机号</label>
                <input id='user_account' type="mobile" name="user" autocomplete="off" v-model.trim='submitForm.phone'>
            </div>
            <div class='login-child'>
                <label for="user_pwd">密码</label>
                <input id='user_pwd' type="password" name="user" v-model.trim='submitForm.pwd' 
                placeholder="">
            </div>
        </div>
        <div class="submit-btn" @click='submit()'>登录</div>
        <div class="more-div" @click='goRegister()'>注册</div>
        <alert-modal ref='modal' cont='登录中'></alert-modal>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    import {loginForm} from '../../../api/getData.js'

    export default {
        name: '',
        data () {
            return {
                submitForm: {
                    phone: '',
                    pwd: ''
                }
            }
        },
        methods: {
            submit(){
                this.$refs.modal.show();
                loginForm(this,this.submitForm).then(res => {
                    if(res.data.status){
                        Cookies.set('auth_token',res.data.token,{expires:1,path:''});
                        console.log(typeof res.data.user)
                        // this.$store.commit('getUserDtl',res.data.user)
                        localStorage.setItem('userIcon',res.data.user.icon)
                        this.$router.push('/wechat')
                    }else{
                        this.$refs.modal.hide()
                        alert(JSON.stringify(res.data.msg))
                    }
                }).catch(err => {
                     this.$refs.modal.hide()
                    alert(JSON.stringify(err))
                })
            },
            goRegister(){
                this.$router.push('/register')
            }

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
                width 50px
                display inline-block
                margin-right 15px
                text-align center
            input 
                display inline-block
                width 100%
                height 22px
                background #F2F2F2
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
        .more-div
            height 20px
            font-size 14px
            line-height 20px
            color #324A7E   
            text-align right 
            margin-top 15px
            font-weight bolder
    
</style>
