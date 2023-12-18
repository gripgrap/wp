<template>
    <div id="index">
      <!-- 페이지 방문을 환영합니다 -->
      <p id='welcome'>페이지 방문을 환영합니다</p>
      <br />
      <!-- 환영 사진 -->
      <img id='first' src="../assets/첫화면1.png" alt="환영 사진" />
    </div>
</template>
  
<script>
  export default {
    name: 'IndexPage',
  };
</script>
  
<style>
  #index {
  /*color:rgb(252, 248, 237);*/
  text-align: center;
  padding: 20px;
  width: 600px;
  height: 800px;
  margin-left: 230px;
}
#welcome {
    font-size:60px;
    outline: 3px solid brown;
    width: 800px;
    height: 100px;
    padding-top: 40px;
    border-radius: 20px;
    border: 3px double darkgoldenrod;
    padding-bottom: 20px;
    margin-left: 50px;
}
#first{
  width: fit-content;
  height: fit-content;
  padding-left: 40px;
  
}
</style>