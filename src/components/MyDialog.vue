<template>
    <div class="root">
      <img id="img" :src="info.img" style="height: 50%;width: 50%;margin-left: 25%"/>

      <div id='21' class="row" v-if="info.who!==''"><span class="rowch">相关人员</span><span class="main">{{info.who}}</span></div>
      <div class="row" v-if="info.when!==''"><div class="rowch">在</div><div class="main">{{info.when}}</div><div class="rowch">这一刻</div></div>
      <div class="row" v-if="info.where!==''"><div class="rowch">于</div><div class="main">{{info.where}}</div><div class="rowch">地</div></div>
      <div class="row" v-if="info.what!==''"><div class="rowch">做了</div><div class="main">{{info.what}}</div><div class="rowch">这件事</div></div>
    </div>
</template>

<script>
    export default {
      name: "MyDialog",
      props: {
        content: Object,
      },
      data() {
        return {
          info: this.$props.content,
        }
      },
      methods:{
        init:function () {
          console.log(this.$props.content);
          console.log(this.$props.content.img);
        }
      },
      mounted() {
        this.init();
      }
    }
</script>

<style scoped>
  @import "../assets/css/DialogStyle.css";
</style>
