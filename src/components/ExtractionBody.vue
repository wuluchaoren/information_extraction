<template>
  <div class="root">
    <div class="left">
      <div class="tips">
        <div class="tipsWord">Tips‼</div>
        <div class="inputTips">在右边的输入框中输入需要抽取信息的内容!!!👉</div>
        <div class="line"></div>
        <div class="or">Or</div>
        <div class="line"></div>
        <div class="fileTips">选择上传的文件!!!👉</div>
      </div>
    </div>
    <div class="right">
      <div class="inputBox">
        <textarea class="text"></textarea>
        <div class="line1">Or</div>
      </div>
      <div class="fileBox">
         <input type="text" id="avatval" placeholder="请选择文件" readonly="readonly" @click="upload"/>
          <input type="file" name="avatar" id="avatar" @change="change"/>
          <a class="button-selectimg" id="avatsel1"  @click="upload">选择文件</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ExtractionBody",
      methods:{
        upload:function(){
          document.getElementById('avatar').click();
        },
        change:function(){
          let content=document.getElementById('avatar').value.split('\\');
          document.getElementById('avatval').value=content[content.length-1];
        }
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
    display: flex;
    width: 25%;
    height: 100%;
  }
  .right{
    width: 75%;
    height: 100%;
  }
  .tips{
    height: 95%;
    margin-top: 10%;
    width: 100%;
    border-right: 1px #eaeaea solid;
  }
  .tipsWord{
    color: red;
    font-size: 25px;
    height: 5%;
    width: 90%;
    display: flex;
    align-items: center;
    padding-left: 10%;
    font-weight: 800;
    font-family:Verdana,sans-serif
  }
  .inputTips{
    width: 60%;
    height: 20%;
    margin-top: 10%;
    margin-left: 16%;
    border: cornflowerblue 2px solid;
    border-radius: 20px;
    padding: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .line{
    width: 0;
    border: 1px solid cornflowerblue;
    height: 23%;
    margin-left: 50%;
  }
  .fileTips{
    width: 60%;
    height: 10%;
    margin-left: 16%;
    border: cornflowerblue 2px solid;
    border-radius: 20px;
    padding: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .or{
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: cornflowerblue;
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
</style>
