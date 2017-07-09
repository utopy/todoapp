<template>
  <div class="container">
    <div class="check">
        
    </div>
    <div class="content">
        <p>{{todo.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['todo']
}
</script>
<style scoped>
p{
    margin: 0
}
    .container{
        background: red;
        height: auto;
    }

    .container div{
        display: inline-block;
    }

    .check{
        background: green;
        height: 20px;
        width: 20px;
        padding: 10px 20px;
    }
</style>

