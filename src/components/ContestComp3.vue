<template>
    <div>
      <!-- 네이버 기술창업 공모전 내용 -->
      <h1>네이버 기술창업 공모전</h1>
  
      <!-- 대회 이미지 및 세부사항을 담은 컨테이너 -->
      <div class="g3">
        <!-- 이미지 엘리먼트 -->
        <img id="G3" src="../assets/네이버공모전.jpg" alt="네이버" />
  
        <!-- 공모전 세부사항을 표시하는 fieldset -->
        <fieldset>
          <legend>세부사항</legend>
          <!-- 공모전 세부사항을 나열한 목록 -->
          <ul>
            <li>주제 - 창업 아이디어 제시</li>
            <li>기간 - 2022.10.15 - 2022.12.12</li>
            <li>참여인원 - 5명</li>
            <li >수상 내역 - 본 공모전에 참가하여 장려상을 수상한 바 있음.</li>
          </ul>
        </fieldset>
      </div>
    </div>
</template>
  
<script>
  export default {
    // Contest3 컴포넌트는 상태나 메서드가 없으므로 비워둡니다.
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
  margin-bottom: 50px;
}
li {
  margin-bottom: 35px;
}
</style>
  