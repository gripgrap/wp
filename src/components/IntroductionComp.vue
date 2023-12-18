<!--
Vue의 ref 함수를 사용하여 id, pwd, index를 상태 변수로 선언합니다.
React의 useState 대신 Vue의 ref를 사용하여 상태를 관리합니다.
v-if 및 v-else 디렉티브를 사용하여 조건부 렌더링을 구현합니다.
Vue의 v-for 및 @click 디렉티브를 사용하여 반복문 및 이벤트 처리를 구현합니다.
JSX 대신에 Vue의 템플릿 문법을 사용합니다.
+
템플릿 섹션 (<template>):
v-if와 v-else 디렉티브를 사용하여 조건부 렌더링을 수행하고 있습니다.
id와 pwd가 'cbkim'과 '1111'인 경우, 버튼들과 해당 버튼을 클릭했을 때 보여지는 내용이 표시됩니다.
그렇지 않은 경우 CheckComp 컴포넌트가 표시됩니다.

스크립트 섹션 (<script>):
setup 함수 내에서 Vue 3의 Composition API를 사용하여 컴포넌트의 로직을 정의하고 있습니다.
ref 함수를 사용하여 id, pwd, index와 같은 반응형 변수를 생성하고 있습니다.
사용자의 입력에 따라 id, pwd, index를 변경하는 메서드들을 정의하고 있습니다.
컴포넌트 간 통신을 위해 CheckComp 컴포넌트를 등록하고 있습니다.

DataIntroComp와 CheckComp 컴포넌트:
해당 컴포넌트들은 다른 파일에서 가져와 사용하고 있습니다. 코드에서는 각각 ./DataIntroComp.vue와 ./CheckComp.vue로 import 되어 있습니다.
-->
<template>
  <div id="intros">
    <template v-if="id === 'cbkim' && pwd === '1111'">
      <button><router-link class="link1" to="/introduction/resume">이력서</router-link></button>
      <button><router-link class="link1" to="/introduction/selfintro">자기소개서</router-link></button>
      <router-view></router-view>
    </template>
    <template v-else>
      <CheckComp :id="id" :pwd="pwd" :changeId="changeId" :changePwd="changePwd" />
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';
import CheckComp from './CheckComp.vue';

export default {
  setup() {
    const id = ref('');
    const pwd = ref('');
    const index = ref(0);

    const changeId = (e) => {
      id.value = e.target.value;
    };

    const changePwd = (e) => {
      pwd.value = e.target.value;
    };

    const contentChange = (event) => {
      index.value = event.target.value;
    };

    return { id, pwd, index, changeId, changePwd, contentChange };
  },
  components: { CheckComp },
};
</script>
<style scoped>
.link1 {
  text-decoration: none;
  color: inherit; /* 부모 요소의 글자색을 상속받음 */
}

#intros {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
button {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>