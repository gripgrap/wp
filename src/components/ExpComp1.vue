<template>
    <div>
      <!-- 아르바이트 및 인턴 경험 내용 -->
      <h1>아르바이트 및 인턴</h1>
  
      <!-- 경험 이미지 및 세부사항을 담은 컨테이너 -->
      <div class="c1">
        <!-- 아르바이트 이미지와 세부사항 -->
        <img id="C-1" src="../assets/코딩교육.jpg" alt="coding_edu" />
        <fieldset id="arbeit">
          <legend>아르바이트</legend>
          <!-- 아르바이트 세부사항을 나열한 목록 -->
          <ul>
            <li>대학생 코딩 교육 아르바이트(1년)</li>
            <li>여론조사 기관 아르바이트(단기)</li>
          </ul>
        </fieldset>
  
        <!-- 인턴 이미지와 세부사항 -->
        <img id="C-2" src="../assets/네이버 인턴.jpg" alt="naver" />
        <fieldset id="intern">
          <legend>인턴</legend>
          <!-- 인턴 세부사항을 나열한 목록 -->
          <ul>
            <li>네이버 AI 데이터 체험형 인턴십 (6개월)</li>
            <li>카카오뱅크 TECH 인턴십 (6개월)</li>
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
h1 {
  margin-bottom: 30px;
}
#arbeit {
  height: 490px;
}
#intern {
  height: 490px;
}
ul {
  margin-top: 70px;
}
li {
  margin-top: 40px;
}
</style>
  