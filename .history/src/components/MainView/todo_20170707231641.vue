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

    .check{
        background: green;
        height: 20px;
        width: 20px;
        padding: 10px 20px;
    }
</style>

