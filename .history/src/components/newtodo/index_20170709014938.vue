<template>
    <div class="form">
        <div class="content">
            <p class="label">Titolo inpegno:</p>
            <input placeholder="todo title" type="text">
        </div>

        <div class="content">
            <p class="label">Descrizione (opzionale):</p>
            <textarea placeholder="todo title" >
            </textarea>
        </div>

        <div class="content">
            <ul>
                <li>spese</li>
                <li>impegni</li>
                <li>lorem</li>
                <li>altro</li>
            </ul>
        </div>

    </div>
</template>

<script>
import autosize from 'autosize'
export default {
    data(){
        return{
            categories: [{id:0, name:'spese'},{id:1, name:"impegni"},{id:2, name:'lorem'},{id:3, name:"impegni"}]
        }
    },
    mounted(){
        autosize(document.querySelectorAll('textarea'));
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
      padding: 0
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
</style>
