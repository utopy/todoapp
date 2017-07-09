<template>
  <div class="container">
    {{todo.created}}
  </div>
</template>
<script>
export default {
  props: ['todo']
}
</script>
<style scoped>
.container{
    width: 100%;
    background: red;
    margin-bottom: 20px;
}
</style>

