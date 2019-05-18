<template>
  <div class="root">
    <div class="head">
      <MyHead text="音乐家生平信息抽取"></MyHead>
    </div>
    <div class="main">
      <ExtractionBody ref="child"></ExtractionBody>
    </div>
    <div class="foot">
      <div class="foot_left"></div>
      <ExtractionButton v-on:extract="onclick"></ExtractionButton>
    </div>
  </div>
</template>

<script>
    import MyHead from "../components/MyHead";
    import ExtractionButton from "../components/ExtractionButton";
    import ExtractionBody from "../components/ExtractionBody";
    import qs from 'qs';
    export default {
      name: "Extraction",
      components: {ExtractionBody, ExtractionButton, MyHead},
      data() {
        return {
          content: '',
          file: null
        }
      },
      methods: {
        onclick: function () {
          let _this = this;
          let child = this.$refs.child;
          _this.$data.content = child.content;
          _this.$data.file=child.file;
          console.log(this.$data.content);
          _this.$data.content===''?_this.extractFile():_this.extractContent();
        },
        extractContent: function () {
          let _this = this;
          _this.$axios.post('/text', {text:_this.$data.content}).then((res) => {
            localStorage.setItem('response', JSON.stringify([].slice.call(res.data)));
            this.$router.push({
              name: 'Result'
            });
          }).catch((err) => {
            console.log(err);
          })
        },
        extractFile: function() {
          let _this = this;
          const myConfig={
            headers: {'Content-Type': 'multipart/form-data'}
          };
          const formdata=new FormData();
          formdata.append('file',_this.$data.file);
          console.log(formdata.get('file'));
          _this.$axios.post('/file', formdata, myConfig).then((res) => {
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
  @import "../assets/css/ExtractionPageStyle.css";
</style>
