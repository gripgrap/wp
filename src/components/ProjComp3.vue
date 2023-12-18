<template>
    <div>
      <!-- 프로젝트 제목 -->
      <h1>NodeJs를 이용한 Backend Web</h1>
  
      <!-- 프로젝트 내용을 담은 섹션 -->
      <div class="p3">
        <!-- 썸네일 이미지 -->
        <img id="P3" src="../assets/프로젝트3.jpg" alt="nodejs" />
  
        <!-- 프로젝트 개요를 담은 fieldset -->
        <fieldset>
          <!-- fieldset의 제목 -->
          <legend>프로젝트 개요</legend>
  
          <!-- 프로젝트 개요 목록 -->
          <ul>
            <!-- 프로젝트 명칭 -->
            <li>여행사이트 제작 프로젝트</li>
            <!-- 역할 및 담당 분야 -->
            <li>백엔드 담당</li>
            <!-- 총 참여 인력 -->
            <li>동원된 총 인력 : 5명</li>
            <!-- 작업 기간 -->
            <li>작업 기간 : 3개월</li>
            <!-- 작업 기간 세부 정보 -->
            <li>22.12-23.02</li>
          </ul>
  
          <!-- 파트너 컴포넌트 삽입 -->
          <PartnerComp3 />
        </fieldset>
      </div>
    </div>
</template>
  
<script>
  // 필요한 경우 컴포넌트 로직 및 상태 관리 추가
  import PartnerComp3 from './PartnerComp3.vue'; // 파트너 컴포넌트의 경로에 맞게 수정
  export default {
    components: {
      PartnerComp3, // 사용하는 컴포넌트 등록
    },
  };
</script>
  
<style scoped>
fieldset {
  width: 42%;
  margin-left: 70px;
  margin-top: 20px;
  font-size: 1.2em;
  text-align: left;
  height:fit-content;
}
</style>
  