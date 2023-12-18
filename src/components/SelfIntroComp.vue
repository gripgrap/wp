<!-- 템플릿 (<template>):

v-for 디렉티브를 사용하여 반복적인 구조를 생성합니다.
이미지 주석 처리된 부분은 주석 처리된 React 코드입니다. Vue에서 이미지는 require 함수를 통해 가져올 수 있습니다.
스크립트 (<script>):

Vue 컴포넌트는 setup 함수를 사용하여 로직을 정의할 수 있습니다. 이 예제에서는 데이터나 메서드가 없으므로 비워두었습니다.
스타일 (<style>):

scoped 속성을 사용하여 스타일이 현재 컴포넌트에만 적용되도록 합니다.
CSS 파일은 @import를 사용하여 가져올 수 있습니다. 여기서는 '../CSS/Selfintro.css' 파일을 import합니다. -->

<template>
    <div id="selfIntro">
      <!-- 자기소개서 내용 -->
      <div class="division">
        <h3>자기소개서</h3>
        <ul id="self">
          <li>안녕하십니까. 귀사에 입사를 희망하여 지원하게 된 임준억이라고 합니다.</li>
          <li>어렸을적부터 친구들과 함께 어울리며 다양한 게임을 접했습니다.</li>
          <li>오락실과 PC방, 게임기를 거치며 그저 재미로만 접하던 게임이었으나,</li>
          <li>어느새부턴가 이 게임 속 세상이 어떻게 구성되는 것인지 궁금증이 들게 되었습니다.</li>
          <li>이러한 궁금증을 바탕으로, 고등학교 시절부터 교내외로 진행하는 게임 개발 발표회에 참여하여</li>
          <li>즐겨 했던 게임들이 코딩을 통해 구현되었음을 알게되었고, 그에 따라 저의 관심은 게임에서 코딩으로 확장되었습니다.</li>
          <li>대학교에서의 전공도 컴퓨터공학을 선택하여 컴퓨터 전반에 걸친 더욱 다양하고 전문적인 지식을 습득할 수 있었습니다.</li>
          <li>전공뿐만이 아니라 방학 및 남는 시간을 활용하여 컴퓨터활용능력, 정보처리기사 등의 자격증을 취득하였고</li>
          <li>교내외 프로젝트에 참여하여 협동과 프로젝트 진행 프로세스를 체득하는 노력을 하였습니다.</li>
          <li>이러한 노력을 바탕으로 귀사에 입사하여서도 저의 능력이 도움이 될 수 있도록 최선을 다하겠습니다.</li>
          <li>감사합니다.</li>
        </ul>
      </div>
    </div>
</template>
  
<script>
</script>
  
  <!-- 스타일링을 위한 CSS 파일을 import -->
<style scoped>
  #selfIntro{
  font-family: "Sunflower", serif;
  margin-left: 20px ;
  font-size: 1em;
  border: 5pt groove #3f51b5;
  border-radius: 10px;
  padding-right: 100px;
}
h3{
  color : blue;
  margin-bottom: 10px;
}
.division{
  margin-left: 100px ;
  margin-top: 20px;
  margin-bottom: 50px;
}
#self {
  list-style: none;
  border: 2px solid black;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
}
li {
  margin-bottom: 7px;
}
</style>
  