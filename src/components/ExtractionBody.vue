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
        <img class="pic" width="42%" height="40%" alt="莫扎特" src="../../static/pic/莫扎特.jpg" @click="demo" style="cursor:pointer"/>
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
        demo:function(){
            let _this = this;
            _this.$axios.post('/text', {text:"1756年，莫扎特在萨尔兹堡出生了。在1781年，莫扎特在维也纳脱离了对大主教的依附，成为了历史上第一位自由作曲家。在1971年12月9日，莫扎特在维也纳撒手人间。"}).then((res) => {
              localStorage.setItem('response', JSON.stringify([].slice.call(res.data)));
              this.$router.push({
                name: 'Result'
              });
            }).catch((err) => {
              console.log(err);
            })
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/ExtractionBodyStyle.css";
</style>
