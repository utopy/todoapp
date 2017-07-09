<template>
  <div class="container">
    <div class="checkContainer">
        <div v-if="!todo.completed"class="checked">

        </div>
    </div>
    <div>
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
.container{
    width: 100%;
    background: white;
    height: 60px;
    border-bottom: 1px solid black;
}

.container div{
    height: 60px;
    text-align: center;
    display: inline-block
}

.checkContainer{
    width: 20px;
    height: 60px;
    background: #23edbb;
}

</style>

