<template>
  <div class="container">
        <div class="button1"></div>
        <div class="button2"></div>
        <div class="button3"></div>
        <div class="button4"></div>
        <div class="button5"></div>
  </div>
</template>
<script>
export default {
  name:"dock"
}
</script>
<style scoped>
.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: flex-start;
    width: 100vw;
    }

.button1 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    width: 50px;
    height: 50px;
    background: blue
    }

.button2 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    width: 50px;
    height: 50px;
    background: blue
    }

.button3 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    width: 50px;
    height: 50px;
    background: blue
    }

.button4 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    width: 50px;
    height: 50px;
    background: blue
    }

.button5 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    width: 50px;
    height: 50px;
    background: blue
    }
</style>


