<template>
    <div>
      <!-- 서울시 성동구 관련 공공서비스 문제 해결을 위한 SW개발 내용 -->
      <h1>서울시 성동구 공공서비스 관련 SW개발 공모전</h1>
  
      <!-- 대회 이미지 및 개요 정보를 담은 컨테이너 -->
      <div class="g2">
        <!-- 이미지 엘리먼트 -->
        <img id="G2" src="../assets/ictcoc_PIUDA_contest2.jpg" alt="성동구 공모전" />
  
        <!-- 공모전 개요를 표시하는 fieldset -->
        <fieldset>
          <legend>공모전 개요</legend>
          <!-- 공모전 정보를 나열한 목록 -->
          <ul>
            <li>주제 - 성동구 관련 문제들의 솔루션 개발(앱, 웹)</li>
            <li>기간 - 2023.09.09 - 2023.10.10</li>
            <li>참가 조건 - ICT콤플렉스 이용자로 구성된 5인 이내의 팀</li>
            <li id="last2">수상 내역 - 본 공모전에 참가하여 우수상을 수상한 바 있음.</li>
          </ul>
        </fieldset>
      </div>
    </div>
</template>
  
<script>
  export default {
  };
</script>
  
<style scoped>
  fieldset {
  width: 40%;
  height: fit-content;
  font-size: 1.1em;
  border-radius:10px;
  margin-top: 130px;
  margin-left: 120px;
}
ul {
  margin-top: 35px;
}
li {
  margin-bottom: 35px;
}
#last2 {
  margin-bottom: 50px;
}
</style>
  