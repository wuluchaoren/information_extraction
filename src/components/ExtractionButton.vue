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
  .extraction{
    width: 8%;
    height: 70%;
    background: #30be2f;
    border: transparent;
    border-radius: 5px;
    color: #fff;
  }
</style>
