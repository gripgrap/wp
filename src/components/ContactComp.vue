<!-- 위 코드에서 <template> 섹션은 Vue의 HTML 템플릿입니다. 
    @click는 Vue에서 클릭 이벤트를 처리하는 방식이며, methods 섹션에 정의된 함수들이 해당 이벤트를 처리합니다. 
    <script> 섹션에는 Vue 컴포넌트의 JavaScript 로직이 들어갑니다. 마지막으로, <style scoped> 섹션은 해당 컴포넌트의 스타일을 정의합니다. -->
<template>
    <div>
      <h1>방문해주셔서 감사합니다.</h1>
      <div id="farewell">
        <!-- 연락처 섹션 -->
        <fieldset>
          <legend>연락처</legend>
          <ul>
            <li>전화번호: 010-4444-5555</li>
            <li>이메일: isaac1@gachon.ac.kr</li>
          </ul>
        </fieldset>
  
        <!-- 인스타그램 아이콘 -->
        <img
          id="insta"
          src="../assets/인스타.png"
          alt="인스타그램"
          @click="handleImageClick1"
          style="cursor: pointer"
        />
  
        <!-- 깃허브 아이콘 -->
        <img
          id="github"
          src="../assets/깃허브.png"
          alt="깃허브"
          @click="handleImageClick2"
          style="cursor: pointer"
        />
      </div>
    </div>
</template>
  
<script>
  export default {
    methods: {
      // 아이콘을 클릭할 때 외부 링크로 이동하는 함수
      handleImageClick1() {
        window.location.href = "https://www.instagram.com/?hl=ko";
      },
      handleImageClick2() {
        window.location.href = "https://github.com/";
      },
    },
  };
</script>
  
<style scoped>
h1 {
  text-align: center;
  margin-bottom: 40px;
}
  input {
    width: 50%;
    height: 100px;
    box-sizing: border-box; /* 입력 상자의 가로폭에 패딩과 테두리를 포함시킵니다. */
  }

  #farewell{
    display: flex;
    margin-bottom: 100px;
    margin-left: 50px;
  }
  select {
    width: 20%;
    height: 100px;
    box-sizing: border-box;
    font-size: 50px;
    text-align: center;
  }
  .a {
    width: 20%;
    height: 100px;
    box-sizing: border-box;
  }

  img {
    width : 25%;
    height: 25%;
  }
  #github {
    width: 25%;
    height: 25%;
    margin-top: 35px;
  }

  #insta {
    width : 9%;
    height : 9%;
    margin-top: 35px;
  }
  ul {
    list-style-type: none;
  }
  fieldset{
    margin-right: 100px;
    margin-left: 110px;
    height: fit-content;
    width: fit-content;
    border-radius: 6%;
  }
  legend{
    text-align: left;
  }
  ul {
    margin-top: 30px;
    margin-bottom: 50px;
  }
</style>
  