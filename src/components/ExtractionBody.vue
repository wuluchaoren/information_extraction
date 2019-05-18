<template>
  <div class="root">
    <div class="left">
      <div class="demo">Demo!!!</div>
      <div class="tips">
        <!--<div class="tipsWord">Tips‼</div>-->
        <!--<div class="inputTips">在右边的输入框中输入需要抽取信息的内容!!!👉</div>-->
        <!--<div class="line"></div>-->
        <!--<div class="or">Or</div>-->
        <!--<div class="line"></div>-->
        <!--<div class="fileTips">选择上传的文件!!!👉</div>-->
        <img class="pic" width="42%" height="40%" alt="贝多芬" src="../../static/pic/贝多芬.jpg"/>
        <img class="pic" width="42%" height="40%" alt="莫扎特" src="../../static/pic/莫扎特.jpg"/>
        <img class="pic" width="42%" height="40%" alt="柴可夫斯基" src="../../static/pic/柴可夫斯基.jpg"/>
        <img class="pic" width="42%" height="40%" alt="肖邦" src="../../static/pic/肖邦.jpg"/>
        <img class="pic" width="42%" height="40%" alt="西贝柳斯" src="../../static/pic/西贝柳斯.jpg"/>
        <img class="pic" width="42%" height="40%" alt="舒伯特" src="../../static/pic/舒伯特.jpg"/>
      </div>
    </div>
    <div class="right">
      <div class="inputBox">
        <textarea class="text" v-model="content"></textarea>
        <div class="line1">Or</div>
      </div>
      <div class="fileBox">
         <input type="text" id="avatval" placeholder="请选择文件" readonly="readonly" @click="upload"/>
          <input type="file" name="avatar" id="avatar" @change="change()"/>
          <a class="button-selectimg" id="avatsel1"  @click="upload">选择文件</a>
      </div>
      <div class="word">请输入需要抽取信息的文字，或者选择上传的文件。注：文件具有更高的优先级。</div>
    </div>
  </div>
</template>

<script>
    import ExtractionButton from "./ExtractionButton";
    export default {
      name: "ExtractionBody",
      components: {ExtractionButton},
      data(){
        return {
          content:'',
          file:null,
        }
      },
      methods:{
        upload:function(){
          document.getElementById('avatar').click();
        },
        change:function(){
          let content=document.getElementById('avatar').value.split('\\');
          document.getElementById('avatval').value=content[content.length-1];
          console.log(document.getElementById('avatar').files[0]);
          this.$data.file=document.getElementById('avatar').files[0];
        },
      }
    }
</script>

<style scoped>
  .root{
    height: 100%;
    width: 100%;
    display: flex;
  }
  .left{
    width: 30%;
    height: 100%;
  }
  .right{
    width: 70%;
    height: 100%;
  }
  .tips{
    height: 95%;
    width: 100%;
    border-right: 1px #eaeaea solid;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
  }
  .inputBox{
    height: 80%;
    width: 100%;
    padding-top: 5%;
  }
  .text{
    width: 90%;
    margin-left: 5%;
    height: 90%;
    font-size:17px;
  }
  .fileBox{
    height: 10%;
    width: 90%;
    margin-left: 5%;
    border: 1px #d5d5d5 solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line1{
    color: #d5d5d5;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a[class="button-selectimg"]{
    color:cornflowerblue;
    padding:4px 6px;
    border:1px solid cornflowerblue;
    border-radius:2px;
    margin-left: 1%;
  }
  input[id="avatval"]{
    padding: 3px 6px 3px 10px;
    border:1px solid #E7EAEC;
    width:30%;
    height:25px;
    line-height:25px;
    border-left:3px solid cornflowerblue;
    background:#FAFAFB;
    border-radius:3px;
  }
  input[type='file']{
    border:0;
    display:none;
  }
  .pic{
    margin-left: 5%;
    margin-top: 2%;
  }
  .demo{
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: cornflowerblue;
    font-size: 25px;
    font-weight: 800;
  }
  .word{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
