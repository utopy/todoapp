<template>
  <div class="container">
        <div class="button1">
            <div class="button"></div>     
        </div>
        <div class="button2">
            <div class="button"></div>     
        </div>
        <div class="button3">
            <div class="button"></div>     
        </div>
        <div class="button4">
            <div class="button"></div>     
        </div>
        <div class="button5">
            <div class="button"></div>     
        </div>
  </div>
</template>
<script>
export default {
  name:"dock"
}
</script>
<style scoped>
.flex-container {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: flex-start;
    }
.button{
    width: 50px;
    height: 50px;
    background: red;
}

.button1 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }

.button2 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }

.button3 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }

.button4 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }

.button5 {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    }
</style>


