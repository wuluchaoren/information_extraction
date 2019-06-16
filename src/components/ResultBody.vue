<template>
    <div class="root">
      <div class="card">
        <div v-for="(item,index) in information" class="items">
          <slot v-bind:item="item">
            <div class="cardItem">
              <div class="cardItems"><span class="cardItemsHead">事件编号：</span><span class="cardItemsBody">{{item.id}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">时间：</span><span class="cardItemsBody">{{item.when}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">地点：</span><span class="cardItemsBody">{{item.where}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">人：</span><span class="cardItemsBody">{{item.who}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">事件：</span><span class="cardItemsBody">{{item.what}}</span></div>
            </div>
          </slot>
        </div>
      </div>
      <div class="font">时间线!!!</div>
      <div class="line">
        <my-dialog v-for="(item,index) in information" :content="item" :id="'dialog'.concat(index.toString())" :key="item.id" class="dialog"></my-dialog>
        <div class="row"></div>
        <result-line
          v-for="(item,index) in information"
          :key="index"
          :id="index"
          :content="item"
          v-on:myMouseOn="myMouseOn"
          v-on:myMouseOut="myMouseOut">
        </result-line>
      </div>
    </div>
</template>

<script>
    import ResultLine from "./ResultLine";
    import MyDialog from "./MyDialog";
    export default {
      name: "ResultBody",
      components: {MyDialog, ResultLine},
      methods:{
        myMouseOn:function(data){
          let point=document.getElementById("dialog"+(data.id-1));
          point.style.display='block';
          let pointp=document.getElementById(data.id-1).children[0].children[0];
          pointp.style.background="#8F48ED";
        },
        myMouseOut:function(data){
          let point=document.getElementById("dialog"+(data.id-1));
          point.style.display="none";
          let pointp=document.getElementById(data.id-1).children[0].children[0];
          pointp.style.background="cornflowerblue";
        },
        init:function(){
          let _this=this;
          let res=JSON.parse(localStorage.getItem('response'));
          _this.$data.information.splice(0,1);
          for(let i=0;i<res.length;i++){
            let temp={
              id:i+1,
              who:res[i].PER===undefined?'':res[i].PER,
              what:res[i].ISSUE,
              when:res[i].TIME===undefined?'':res[i].TIME,
              where:res[i].LOC===undefined?'':res[i].LOC,
              img:''
            };
            _this.$data.information.push(temp);
          }
        },
        initImg:function(){
          let _this=this;
          // _this.$axios.get(`/pic?character=${_this.$data.information[0].who}&number=${_this.$data.information.length}`).then(res=>{
          //   console.log(res);
          // }).catch(err=>{
          //   console.log(err);
          // })
          _this.$axios.post('/pic',{character:_this.$data.information[0].who,number:_this.$data.information.length}).then(res=>{
            console.log(res);
            for(let i=0;i<res.data.length;i++){
              // if(res.data[i] !== undefined){
              //   _this.$data.information0[i].img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558501379383&di=5a50742bb5861cfac9436b8b26dbceb6&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F5c5480482a5ac9db80005ea01adab422ea4c35fc.jpg"
              // }
              _this.$data.information[i].img=res.data[i];
            }
          }).catch(err=>{
            console.log(err);
          })
        }
      },
      data(){
        return{
          information:[{
              id:'',
              who:'',
              where:'',
              when:'',
              what:'',
              img:'',
            }]
        }
      },
      created() {
        this.init();
        this.initImg();
      }
    }
</script>

<style scoped>
  @import "../assets/css/ResultBodyStyle.css";
</style>
