<template>
    <div class="root">
      <img id="img" src="" style="height: 50%;width: 100%"/>
      <div id='21' class="row"><span class="rowch">相关人员</span><span class="main">{{info.who}}</span></div>
      <div class="row"><span class="rowch">在</span><span class="main">{{info.when}}</span><span class="rowch">这一刻</span></div>
      <div class="row"><span class="rowch">在</span><span class="main">{{info.where}}</span><span class="rowch">地</span></div>
      <div class="row"><span class="rowch">做了</span><span class="main">{{info.what}}</span><span class="rowch">这件事</span></div>
    </div>
</template>

<script>
    export default {
      name: "MyDialog",
      props:{
        content:Object
      },
      data(){
        return{
          info:this.content
        }
      },
      methods:{
        initDialog:function(){
          document.getElementById("img").src=this.$data.info.img;
          // document.getElementById("img").src="http://eiv.baidu.com/maimg/20080505/1098141554.gif";
          console.log(document.getElementById("img").src);
        }
      },
      mounted() {
        this.initDialog();
      }
    }
</script>

<style scoped>
  .row{
    /*background: #30be2f;*/
    height: 12.5%;
    width: 90%;
    padding: 0 5% 0 5%;
  }
  .rowch{
    width: 20%;
    /*background: indianred;*/
    display: inline-block;
    text-align: center;
    /*color: white;*/
  }
  .main{
    width: 60%;
    display: inline-block;
    text-align: center;
    font-weight: 800;
  }
</style>
