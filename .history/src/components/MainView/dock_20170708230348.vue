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
  
}
</script>
<style scoped>
.container {
    height: 50px;
    width: 100vw;
    background: red;
	display: box;
	box-orient: horizontal;
	box-pack: center;
	box-direction: normal;
	box-align: center;
}

.button1{
	box-ordinal-group: 1;
	box-flex: 0;
}

.button2{
	box-ordinal-group: 1;
	box-flex: 0;
}

.button3{
	box-ordinal-group: 1;
	box-flex: 0;
}

.button4{
	box-ordinal-group: 1;
	box-flex: 0;
}

.button5{
	box-ordinal-group: 1;
	box-flex: 0;
}
</style>


