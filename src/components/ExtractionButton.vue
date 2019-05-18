<template>
  <button class="extraction" @click="Extraction">抽取</button>
</template>

<script>
    export default {
      name: "ExtractionButton",
      methods:{
          Extraction:function(){
            this.$emit('extract');
          }
      }
    }
</script>

<style scoped>
  @import "../assets/css/ExtractionButtonStyle.css";
</style>
