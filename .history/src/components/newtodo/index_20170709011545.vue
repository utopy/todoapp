<template>
    <div class="form">
        <div class="content">
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
      height: 100vw;
      width: 100vh;
  }

  .content{
      margin-top: 15px;
      width: 100%;
  }

  .content input{
      width: 100%;
      height: 20px;
    padding: 10px;
    background: transparent;
    border: 0;
    outline: none;
    border-bottom: 1px solid rgba(205, 221, 221, 0.3);
  }
</style>
