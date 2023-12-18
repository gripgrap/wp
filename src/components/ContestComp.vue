<!-- 위 코드에서 <template> 섹션은 Vue의 HTML 템플릿입니다. v-for 디렉티브를 사용하여 contests 배열을 순회하고, 각 탭 버튼을 렌더링합니다. 
    클릭 이벤트는 @click 디렉티브로 처리되고, 해당 이벤트가 발생하면 contentChange 메서드가 호출되어 현재 선택된 탭의 인덱스를 업데이트합니다. 
    선택된 탭에 해당하는 내용은 Mustache 구문 {{ contests[index].content }}를 통해 표시됩니다. 마지막으로, <style scoped> 섹션은 해당 컴포넌트의 스타일을 정의합니다. -->
<template>
    <div id="contest">
      <!-- 탭 버튼들을 매핑하여 렌더링 -->
      <button><router-link class="link3" to="/contest/contest1">공모전1</router-link></button>
      <button><router-link class="link3" to="/contest/contest2">공모전2</router-link></button>
      <button><router-link class="link3" to="/contest/contest3">공모전3</router-link></button>

      <!-- 선택된 탭에 해당하는 내용을 표시 -->
      <router-view></router-view>
    </div>
</template>
  
<script>
</script>
  
<style>
.link3 {
  text-decoration: none;
  color: inherit; /* 부모 요소의 글자색을 상속받음 */ 
}
button {
  margin-left: 60px;
}
#contest {
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: center;
}
#contest{
  margin-left: 30px;
  align-items: center;
}

#G1, #G2, #G3 {
  width:40%;
  height: 50%;
  margin-left: 60px;
}

h1 {
  padding-top: 20px;
}

.g1, .g2, .g3 {
  padding-top: 50px;
  display: flex;
}
</style>
  