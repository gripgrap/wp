<template>
    <div id="project">
      <!-- 프로젝트 탭 버튼들을 매핑하여 렌더링 -->
      
      <button><router-link class="link2" to="/project/proj1">프로젝트1</router-link></button>
      <button><router-link class="link2" to="/project/proj2">프로젝트2</router-link></button>
      <button><router-link class="link2" to="/project/proj3">프로젝트3</router-link></button>

      <!-- 선택된 프로젝트에 해당하는 내용을 표시하는 컨테이너 -->
      <div id="showroom">
      
        <router-view></router-view>
      </div>
    </div>
</template>
  
<script>

</script>
  
<style>
.link2 {
  text-decoration: none;
  color: inherit; /* 부모 요소의 글자색을 상속받음 */
}
button {
  margin-left: 60px;
}
#project {
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: center;
}
#project{
  margin-left: 50px;
}

h1 {
  padding-top: 20px;
}

#P1, #P2, #P3 {
  width: 50%;
  padding-bottom: 50px;
  height: 50%;
}

#pt1, #pt2, #pt3{
  border-radius: 0%;
  width: fit-content;
  margin-left: 10px;
}

#pt1:hover, #pt2:hover, #pt3:hover {
  transform: scale(1.2);
  transition: transform 3s;
}


fieldset {
  width: 300px;
  margin-left: 50px;
  font-size: 1.2em;
  text-align: left;
  height: 500px;
}
.p1, .p2, .p3 {
  padding-top: 50px;
  display: flex;
}
ul {
  list-style: none;
}
</style>
  