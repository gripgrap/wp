<!--
    CSS 파일 import:

<style scoped>를 사용하여 로그인 컴포넌트에만 스타일이 적용되도록 합니다.
@import "./CSS/Login.css";를 사용하여 외부 CSS 파일을 import합니다.
양방향 바인딩 (v-model):

Vue에서는 양방향 데이터 바인딩을 위해 v-model 디렉티브를 사용합니다.
v-model="id"와 v-model="pwd"를 사용하여 id와 pwd 프롭스를 양방향으로 바인딩합니다.
이미지 경로 처리:

이미지 경로는 :src="require('/image/보안1.jpg')"와 같이 require 함수를 사용하여 처리합니다.
Vue에서 이미지는 모듈로 간주되어야 하므로 require를 사용합니다.
이렇게 변환된 코드는 Vue 컴포넌트로 사용될 수 있습니다. 부모 컴포넌트에서 Login 컴포넌트를 사용할 때 필요한 데이터와 이벤트 핸들러를 전달해야 합니다.
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
v-model 제거: 입력 필드에서 v-model 사용을 제거했습니다.

프롭스 직접 사용: v-model 대신에 입력 값들을 직접 부모 컴포넌트로부터 전달받은 프롭스에 바인딩했습니다.

이벤트 처리: 입력 값이 변경될 때 부모 컴포넌트에 이벤트를 발생시키기 위해 @input을 사용했습니다.

CSS Import: "Login.css" 파일에서 스타일을 가져오기 위한 import 문이 주석에서 해제되었습니다. 만약 필요하지 않다면 import 문을 삭제하십시오.
-->

<template>
    <div>
      <h3>개인자료 확인을 위해 로그인이 필요합니다.</h3>
      <!-- 아이디 및 비밀번호 입력 폼 -->
      <table id="lg" align="center">
        <tr>
          <td width="20%">아이디</td>
          <td>
            <!-- 부모 컴포넌트로부터 받은 prop을 직접 사용 -->
            <input type="text" :value="id" @input="changeId" />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <!-- 부모 컴포넌트로부터 받은 prop을 직접 사용 -->
            <input type="password" :value="pwd" @input="changePwd" />
          </td>
        </tr>
      </table>
      <img id = 'hand' src="../assets/보안1.jpg" alt="보안"/>
    </div>
</template>
  
<script>
  export default {
    props: {
      // 부모 컴포넌트로부터 전달받는 프롭스
      id: String,
      pwd: String,
      changeId: Function,
      changePwd: Function,
    },
  };
</script>
  
<style scoped>
* {
  align-items: center;
  text-align: center;
}

h3 {
  padding-bottom: 20px;
  padding-top: 20px;
  text-decoration: underline;
}

#lg {
  size: 20%;
  border-radius: 20%;
}

input[type="text"], input[type="password"] {
  width: 100%;
  font-size: 60px;
  text-align: left;
  background-color: rgb(164, 206, 240);
  border: none;


}
input:focus{
  outline: none;
}


#hand {
  margin-top: 50px;
  margin-bottom: 10px;
  margin-right: 20px;
  align-items: center;
  width: 20%;
  height: 50%;
}
table{
  width: 60%;
  margin-left: 300px;
  border: 3px solid cornflowerblue;
  border-collapse: collapse;
  text-align: center;
  font-size: 1.5em;
  padding-bottom: 30px;
}
td,th{
  width: 20%;
  /*!important*/
  border: 1px solid cornflowerblue;

}
tr{
  height: 30;
}
</style>
  
  