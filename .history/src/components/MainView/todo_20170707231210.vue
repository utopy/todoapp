<template>
  <div class="container">
    <div>
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
        padding:10px 20px;
    }
</style>

