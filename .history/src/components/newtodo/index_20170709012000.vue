<template>
    <div class="form">
        <div class="content">
            <p>Name:</p>
            <input placeholder="todo title" type="text">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .form{
    width: 100vw;
    height: 100vh;
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
    border-bottom: 1px solid rgba(205, 221, 221, 0.3);
  }
</style>
