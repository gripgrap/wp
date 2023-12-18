<template>
    <div>
      <!-- 프로젝트 제목 -->
      <h1>VueJs를 이용한 Frontend Web</h1>
  
      <!-- 프로젝트 내용을 담은 섹션 -->
      <div class="p2">
        <!-- 썸네일 이미지 -->
        <img id="P2" src="../assets/뷰프로젝트1.jpg" alt="vue" />
  
        <!-- 프로젝트 개요를 담은 fieldset -->
        <fieldset>
          <!-- fieldset의 제목 -->
          <legend>프로젝트 개요</legend>
  
          <!-- 프로젝트 개요 목록 -->
          <ul>
            <!-- 프로젝트 명칭 -->
            <li>VueJS를 활용한 검색 웹사이트 제작</li>
            <!-- 총 참여 인력 -->
            <li>동원된 총 인력: 총 4명</li>
            <!-- 역할 및 담당 분야 -->
            <li>레퍼런스 확보 및 보조 담당</li>
            <!-- 작업 기간 -->
            <li>작업 기간 : 2개월</li>
            <!-- 작업 기간 세부 정보 -->
            <li>22.6-22.7</li>
            <!-- 보완 내용 -->
            <li>교수님의 피드백을 받아 보완함</li>
          </ul>
  
          <!-- 파트너 컴포넌트 삽입 -->
          <PartnerComp2 />
        </fieldset>
      </div>
    </div>
</template>
  
<script>
  // 필요한 경우 컴포넌트 로직 및 상태 관리 추가
  import PartnerComp2 from './PartnerComp2.vue'; // 파트너 컴포넌트의 경로에 맞게 수정
  export default {
    components: {
      PartnerComp2, // 사용하는 컴포넌트 등록
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
  