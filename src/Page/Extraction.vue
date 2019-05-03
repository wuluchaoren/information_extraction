<template>
  <div class="root">
    <div class="head">
      <MyHead text="音乐家生平信息抽取"></MyHead>
    </div>
    <div class="main">
      <ExtractionBody></ExtractionBody>
    </div>
    <div class="foot">
      <div class="foot_left"></div>
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
  @import "../assets/css/ExtractionPageStyle.css";
</style>
