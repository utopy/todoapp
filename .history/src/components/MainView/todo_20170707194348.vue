<template>
  <div class="container">
    <div class="checkContainer">
        <input type="checkbox" id="checkbox" v-model="todo.completed">
    </div>
    <div>
        {{todo.completed}}
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
    background: red;
    height: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
}

.container > div{
    display: inline-block
}

.checkbox{
    height: 40px;
    width: 20px;
    background: white;
    text-align: center;
}

.checkbox input{

}
</style>

