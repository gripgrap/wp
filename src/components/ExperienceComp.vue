<!-- 
    위 코드에서 <template> 섹션은 Vue의 HTML 템플릿입니다. v-for 디렉티브를 사용하여 careers 배열을 순회하고, 각 경력 탭 버튼을 렌더링합니다. 
        클릭 이벤트는 @click 디렉티브로 처리되고, 해당 이벤트가 발생하면 contentChange 메서드가 호출되어 현재 선택된 경력의 인덱스를 업데이트합니다.
        선택된 경력에 해당하는 내용은 Mustache 구문 {{ careers[index].content }}를 통해 표시됩니다. 마지막으로, <style scoped> 섹션은 해당 컴포넌트의 스타일을 정의합니다.
 -->
<template>
    <div id="experience">
      <!-- 경력 탭 버튼들을 매핑하여 렌더링 -->
      
      <button><router-link class="link4" to="/experience/exp1">알바 + 인턴</router-link></button>
      <button><router-link class="link4" to="/experience/exp2">교회선교_1</router-link></button>
      <button><router-link class="link4" to="/experience/exp3">교회선교_2</router-link></button>

      <!-- 선택된 경력에 해당하는 내용을 표시 -->
      <router-view></router-view>
    </div>
</template>
  
<script>
</script>
  
<style>
.link4 {
  text-decoration: none;
  color: inherit; /* 부모 요소의 글자색을 상속받음 */ 
}
button {
  margin-left: 60px;
}
#experience {
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: center;
}
#career{
  margin-left: 30px;
}
img{
  width:600px;
  height:400px;
}

#arbeit, #intern {
  width: 70%;
  margin-left: 50px;
  font-size: 1.5em;
}

.c1 {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
}

.c2, .c3 {
  display: flex;
  padding-left: 30px;
  padding-bottom: 150px;
}


#C-1, #C-2 {
  width : 80%;
  height: 80%;
  margin-left: 40px;
  margin-top: 10px;
}
</style>
  