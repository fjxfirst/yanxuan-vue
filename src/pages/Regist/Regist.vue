<template>
  <div class="regist-wrap">
    <header-guide/>
    <div class="regist-content">
      <header class="regist-title">
        手机号注册
      </header>
      <form action="#" autocomplete="off">
        <div class="input-info phoneNumber">
          <label for="phoneN" v-show="isShowPhone">请输入手机号</label>
          <input type="text" id="phoneN" class="input-phoneNumber" v-model="phoneNumber" @blur="toCheck">
          <img src="./img/quxiao.png" @click="clear(1)" v-show="!isShowPhone">
        </div>
        <div class="input-info VerificationCode">
          <label for="code" v-show="isShowCode">请输入短信验证码</label>
          <div class="getCode" @click="getCode">获取验证码</div>
          <input type="text" id="code" class="input-VerificationCode" v-model="VerificationCode" @blur="toCheck">

        </div>
        <div class="input-info password">
          <label for="pwd" v-show="isShowPwd">请输入密码</label>
          <input type="password" id="pwd" class="input-password" v-model="password">
          <img src="./img/quxiao.png" @click="clear(2)" v-show="!isShowPwd">
        </div>
        <div class="error" v-show="errorMsg">{{errorMsg}}</div>
        <div class="regits-btn">注册</div>
        <p>我同意<span>《服务条款》</span>和<span>《网易隐私政策》</span></p>
      </form>
      <div class="email-regist">邮箱账号注册<i class="icon-goahead"></i></div>
    </div>
  </div>
</template>

<script>
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide'

  export default {
    data() {
      return {
        phoneNumber: '',
        password: '',
        VerificationCode: '',
        isShowPhone:true,
        isShowCode:true,
        isShowPwd:true,
        errorMsg:'',

      }
    },
    components:{
      HeaderGuide
    },
    methods:{
      getCode(){

      },
      clear(type){
        if(type===1){
          this.phoneNumber='';
        }else if(type===2){
          this.password='';
        }
      },
      toCheck(){
        //合法性校验
        if(!/^1[3|4|5|7|8][0-9]{9}$/.test(this.phoneNumber)){
          this.errorMsg='手机号格式错误';
        }
        else if(!/^\d{6}\d$/.test(this.VerificationCode)){
          this.errorMsg='短信验证码格式错误';
        }
      }

    },
    watch:{
      phoneNumber(){
        if(this.phoneNumber){
          this.isShowPhone=false;
        }else{
          this.isShowPhone=true;
        }
      },
      VerificationCode(){
        if(this.VerificationCode){
          this.isShowCode=false;
        }else{
          this.isShowCode=true;
        }
      },
      password(){
        if(this.password){
          this.isShowPwd=false;
        }else {
          this.isShowPwd=true;
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";

  .regist-wrap{
    height: 100%;
    background-color: #fff;
    .regist-content{
      padding-top:98/@rem;
      .regist-title{
        width: 100%;
        height:45/@rem;
        font-size: 36/@rem;
        line-height: 45/@rem;
        color: #333;
        text-align: center;
        margin-top: 20/@rem;
      }
      form{
        margin-top:80/@rem;
        input{
          border:none;
          outline: none;
          //background-color: #707070;
          width: 590/@rem;
          height:42/@rem;
          margin-left: 16/@rem;
          margin-top: 28/@rem;
          font-size: 30/@rem;
        }
        .input-info{
          margin: 0 auto;
          width: 670/@rem;
          height:92/@rem;
          position: relative;
          border-bottom: 1px solid #E6E6E6;
          label{
            font-size: 28/@rem;
            color: #7F7F7F;
            position: absolute;
            top:38/@rem;
            left:16/@rem;
          }
          img{
            width: 30/@rem;
            height: 30/@rem;
            position: absolute;
            top:32/@rem;
            right:16/@rem;
          }
        }
        .phoneNumber{
          .input-phoneNumber{

          }

        }
        .VerificationCode{
          margin-top: 100/@rem;
          .input-VerificationCode{
            width: 380/@rem;
            height: 42/@rem;

          }
          .getCode{
            margin-right: 16/@rem;
            margin-top: 22/@rem;
            width: 164/@rem;
            height: 54/@rem;
            text-align: center;
            color: #333;
            font-size: 28/@rem;
            background: #fff;
            line-height: 54/@rem;
            border: 1px solid #7F7F7F;
            border-radius: 8/@rem;
            position: absolute;
            right: 0;
          }

        }
        .password{
          .input-password{

          }

        }
        .error{
          width: 298/@rem;
          color: #b4282d;
          font-size: 24/@rem;
          height: 40/@rem;
          line-height: 40/@rem;
          margin-left: 40/@rem;
          margin-top: 16/@rem;
        }
        .regits-btn{
          margin: 0 auto;
          display: block;
          width: 666/@rem;
          height: 90/@rem;
          text-align: center;
          line-height: 90/@rem;
          font-size: 28/@rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          border-radius: 8/@rem;
          margin-top: 40/@rem;
        }
        p{
          color: #7f7f7f;
          font-size: 24/@rem;
          margin-left: 40/@rem;
          margin-top: 35/@rem;
          span{
            color: #007AFF;
          }
        }
      }
      .email-regist{
        color: #333;
        font-size: 28/@rem;
        text-align: center;
        margin-top: 56/@rem;
      }
    }
  }

</style>
