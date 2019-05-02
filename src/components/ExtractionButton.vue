<template>
  <button class="extraction" @click="Extraction">抽取</button>
</template>

<script>
    export default {
      name: "ExtractionButton",
      methods:{
          Extraction:function(){
            this.$router.push({
              name:'Result'
            });
          }
      }
    }
</script>

<style scoped>
  @import "../assets/css/ExtractionButtonStyle.css";
</style>
