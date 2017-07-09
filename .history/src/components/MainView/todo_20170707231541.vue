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
    }

    .check{
        float: left;
        background: green;
        height: 20px;
        padding: 20px;
    }
</style>

