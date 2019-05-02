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
  @import "../assets/css/PageStyle.css";
</style>
