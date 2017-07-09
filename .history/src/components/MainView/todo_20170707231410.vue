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
        padding:10px 0;
    }

    .check{
        float: left;
        background: green;
        padding: 5px
    }
</style>

