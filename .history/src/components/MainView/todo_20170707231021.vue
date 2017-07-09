<template>
  <div class="container">
    {{todo.title}}
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
    }
</style>

