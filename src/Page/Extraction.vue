<template>
  <div class="root">
    <div class="head">
      <MyHead text="信息抽取"></MyHead>
    </div>
    <div class="main">
      <ExtractionBody></ExtractionBody>
    </div>
    <div class="foot">
      <ExtractionButton></ExtractionButton>
    </div>
  </div>
</template>

<script>
    import MyHead from "../components/MyHead";
    import ExtractionButton from "../components/ExtractionButton";
    import ExtractionBody from "../components/ExtractionBody";
    export default {
      name: "Extraction",
      components: {ExtractionBody, ExtractionButton, MyHead },

    }
</script>

<style scoped>
  .root{
    height: 100%;
    width: 100%;
  }
  .head{
    height: 7%;
    width: 100%;
  }
  .main{
    width: 100%;
    height: 88%;
  }
  .foot{
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
