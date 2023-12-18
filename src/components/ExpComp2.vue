<template>
    <div>
      <!-- 교회 선교-1 경험 내용 -->
      <h1>교회 선교-1</h1>
  
      <!-- 경험 이미지 및 세부사항을 담은 컨테이너 -->
      <div class="c2">
        <!-- 선교 이미지 -->
        <img id="mission" src="../assets/태백삼척 선교.jpg" alt="강원도 선교 사진" />
  
        <!-- 선교 세부사항을 표시하는 fieldset -->
        <fieldset>
          <legend>태백 삼척 국내 선교</legend>
          <!-- 선교 세부사항을 나열한 목록 -->
          <ul>
            <li>기간 : 23.08.03-23.08.06</li>
            <li>강원도의 지방 소교회 지원</li>
            <li>마사지 사역, 마을 잔치 등 진행</li>
          </ul>
        </fieldset>
      </div>
    </div>
</template>
  
<script>
  export default {
    // Career2 컴포넌트는 상태나 메서드가 없으므로 비워둡니다.
  };
</script>
  
<style scoped>
h1 {
  margin-bottom: 30px;
}
#mission {
  margin-left: 50px;
  margin-right: 50px;
}
fieldset {
  height: 400px;
  width: fit-content;
}
ul {
  margin-top: 50px;
}
li {
  margin-bottom: 30px;
}
</style>
  