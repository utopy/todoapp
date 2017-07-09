<template>
  <div class="container">
    <div class="check">
        <input type="checkbox">
    </div>
    <div>
        {{todo.title}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['todo']
}
</script>
<style scoped>
    .container{
        background: red;
        padding:10px ;
        height: auto;
    }

    .container div{
        display: inline-block;
        margin: 0;
    }

    .check{
        background: green;
        height: 20px;
        width: 20px;
        margin: 0;
        padding: 10px 20px;
    }
</style>

