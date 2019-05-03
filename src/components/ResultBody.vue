<template>
    <div class="root">
      <div class="card">
        <div v-for="(item,index) in information" class="items">
          <slot v-bind:item="item">
            <div class="cardItem">
              <div class="cardItems"><span class="cardItemsHead">事件编号：</span><span class="cardItemsBody">{{item.id}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">时间：</span><span class="cardItemsBody">{{item.when}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">地点：</span><span class="cardItemsBody">{{item.where}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">事件：</span><span class="cardItemsBody">{{item.what}}</span></div>
              <div class="cardItems"><span class="cardItemsHead">相关人员：</span><span class="cardItemsBody">{{item.who}}</span></div>
            </div>
          </slot>
        </div>
      </div>
      <div class="font">时间线!!!</div>
      <div class="line">
        <my-dialog v-for="(item,index) in information" :content="item" :id="'dialog'.concat(index.toString())" :key="item.name" class="dialog"></my-dialog>
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
        }
      },
      data(){
        return{
          information:[{
            id:'1',
            who:'1',
            where:'2',
            when:'3',
            what:'4'
          },
            {
              id:'2',
              who:'sadas',
              where:'2',
              when:'3',
              what:'4'
            },
            {
              id:'3',
              who:'eqweqw',
              where:'2',
              when:'3',
              what:'4'
            },
            {
              id:'4',
              who:'eqweqw',
              where:'2',
              when:'3',
              what:'4'
            },
            {
              id:'5',
              who:'eqweqw',
              where:'2',
              when:'3',
              what:'4'
            },
            {
              id: '6',
              who: 'eqweqw',
              where: '2',
              when: '3',
              what: '4'
            },
            {
              id:'7',
              who:'eqweqw',
              where:'2',
              when:'3',
              what:'4'
            },
            {
              id:'8',
              who:'eqweqw',
              where:'2',
              when:'3',
              what:'4'
            },
            {
              id:'9',
              who:'eqweqw',
              where:'2',
              when:'3',
              what:'4'
            }],

        }
      }
    }
</script>

<style scoped>
  .root{
    width: 100%;
    height: 100%;
  }
  .card{
    height: 85%;
    /*background: indianred;*/
    display: flex;
    /*justify-content: center;*/
    flex-wrap: wrap;
    width: 100%;
    overflow: auto;
  }
  .line{
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row{
    width: 3%;
    border: 2px solid cornflowerblue;
  }
  .dialog{
    display: none;
    position: absolute;
    top:50%;
    left:50%;
    height: 50%;
    width: 30%;
    border: 1px solid transparent;
    margin-left:-15%;
    margin-top: -20%;
    border-radius:10px ;
    padding: 10px;
    background: rgba(100, 149, 237, 0.5);
  }
  .items{
    margin-left: 5%;
    margin-top: 1%;
    width: 42.5%;
    height: 45%;
    /*background: #30be2f;*/
    margin-bottom: 1%;
    border: 1px solid #d8d8d8;
    border-radius: 7px;
  }
  .font{
    display: flex;
    align-items: center;
    justify-content: center;
    color: cornflowerblue;
    font-size: 25px;
    font-weight: 800;
  }
  .cardItem{
    height: 100%;
    width: 100%;
  }
  .cardItems{
    height: 20%;
    display: flex;
    align-items: center;
    padding-left: 5%;
  }
  .cardItemsHead{
    width: 15%;
    color: cornflowerblue;
  }
  .cardItemsBody{
    width: 70%;
    display: flex;
    justify-content: center;
  }
</style>
