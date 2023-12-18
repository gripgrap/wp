<template>
    <div>
      <!-- 제목 -->
      <h1>교회 선교-2</h1>
  
      <!-- 동영상과 정보를 담은 섹션 -->
      <div class="c3">
        <!-- 동영상 재생을 위한 태그 -->
        <video id ='cambodia' width="640" height="360" controls>
          <!-- 동영상 파일 경로 -->
          <source src="../assets/캄보디아선교.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <!-- 선교 정보를 담은 fieldset -->
        <fieldset>
          <!-- fieldset의 제목 -->
          <legend>캄보디아 해외 단기 선교</legend>
          <!-- 선교 정보 목록 -->
          <ul>
            <!-- 선교 기간 -->
            <li>기간 : 17.01.23-17.01.30</li>
            <!-- 선교 지역 및 내용 -->
            <li>캄보디아 도시 외곽의 교회 지원</li>
            <!-- 선교 활동 내용 -->
            <li>마을 잔치, 음식 나눔 사역 등 진행</li>
          </ul>
        </fieldset>
      </div>
    </div>
</template>
  
<script>
  export default {
    // 컴포넌트 로직 및 상태 관리 (Vue.js에서 필요한 경우 추가)
  };
</script>
  
<style scoped>
h1 {
  margin-bottom: 30px;
}
#cambodia {
  margin-left: 50px;
  margin-right: 50px;
}
fieldset {
  width: fit-content;
  height: 358px;
}
ul {
  margin-top: 50px;
}
li {
  margin-bottom: 30px;
}
</style>
  