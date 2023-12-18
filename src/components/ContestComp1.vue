<template>
    <div>
      <!-- 서울 열린데이터광장 공공데이터 활용 앱/웹 경진대회 내용 -->
      <h1>서울 열린데이터광장 공공데이터 활용 앱/웹 경진대회</h1>
  
      <!-- 대회 이미지 및 개요 정보를 담은 컨테이너 -->
      <div class="g1">
        <!-- 이미지 엘리먼트 -->
        <img id="G1" src="../assets/seouldataplaza_contest1.jpg" alt="서울 공공데이터 공모전" />
  
        <!-- 공모전 개요를 표시하는 fieldset -->
        <fieldset>
          <legend>공모전 개요</legend>
          <!-- 공모전 정보를 나열한 목록 -->
          <ul id="seoul">
            <li>참가 유형 - 일반부, 학생부</li>
            <li>주제 - 서울 열린데이터광장 공공데이터를 활용한 자유주제</li>
            <li>제출 사항 - 상세기획서, 결과물, 참가신청서</li>
            <li>참여기간 - 2023.01.05-2023.03.01</li>
            <li id = 'last'>수상내역 - 우수상을 수상한 바 있음.</li>
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
  margin-top: 30px;
}
li {
  margin-bottom: 30px;
}
#last {
  margin-bottom: 50px;
}
</style>
  