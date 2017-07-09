<template>
    <div class="form">
        <div class="content">
            <p class="label">Titolo impegno:</p>
            <input placeholder="todo title" type="text">
        </div>

        <div class="content">
            <p class="label">Descrizione (opzionale):</p>
            <textarea placeholder="todo title" >
            </textarea>
        </div>

        <div class="content">
            <ul>
                <li v-for="c in categories" @click="selectCategory(c)" v-bind:class="{selected: c.checked}">{{c.name}}</li>
            </ul>
        </div>

        <div class="content">
            <div class="button">
                Crea
            </div>
        </div>

    </div>
</template>

<script>
import autosize from 'autosize'
export default {
    data(){
        return{
            categories: [{id:0, name:'spese',checked: false},{id:1, name:"impegni",checked: false},{id:2, name:'lorem',checked: false},{id:3, name:"impegni",checked: false}]
        }
    },
    mounted(){
        autosize(document.querySelectorAll('textarea'));
    },
    methods:{
        selectCategory(category){
            console.log(category)
            category.checked = !category.checked;
        }
    }
}
</script>

<style scoped>
  .form{
    width: 100vw;
    height: 100vh;
    color: #CDDDDD;
  }

  .content{
      box-sizing: border-box;
      margin-top: 15px;
      width: 100vw;
      padding: 20px;
  }

  .content input{
    height: 20px;
    padding: 10px;
    background: transparent;
    border: 0;
    outline: none;
    color: #CDDDDD;
    border-bottom: 1px solid #2CDA9D;
  }

  .label{
      font-size: 14px;
      font-weight: bold;
  }

  .content textarea{
      width: 100%;
      background: transparent;
      outline: none;
      border: 0;
      color: #CDDDDD;
      resize: none;
      max-height: 130px;
      border-bottom: 1px solid #2CDA9D;

  }

  .content ul{
      text-align: center;
      padding: 0;
      margin-top: -50px;
  }

  .content ul li{
      display: inline-block;
      width: 50px;
      padding: 5px;
      margin: 5px;
      border: 2px solid #2CDA9D;
      border-radius: 10px;
      font-size: 12px;
      color: #2CDA9D;
  }

  .content ul .selected{
      background: #2CDA9D;
      color: #0B0A07 
  }

  .content .button{
      background: #30302F;
      border-radius: 50px;
      margin: 10px;
  }
</style>
