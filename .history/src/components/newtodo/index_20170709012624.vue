<template>
    <div class="form">
        <div class="content">
            <p class="label">Todo's title:</p>
            <input placeholder="todo title" type="text">
        </div>

        <div class="content">
            <p class="label">Description (optional):</p>
            <textarea placeholder="todo title" >
            </textarea>
        </div>

    </div>
</template>

<script>
import 'autosize'
export default {

}
</script>

<style scoped>
  .form{
    width: 100vw;
    height: 100vh;
    color: #CDDDDD
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
      border-bottom: 1px solid #2CDA9D;

  }
</style>
