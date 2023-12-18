<template>
  <div id="resume">
    <em>1. 기초 자료</em>
    <table>
      <tr>
        <td id="me" rowspan="6">
          <!-- <img src="../assets/임준억_증명사진.jpg" alt="증명사진" /> -->
        </td>
        <td bgcolor="#e3fcff">성 명</td>
        <td>임 준 억</td>
        <td bgcolor="#e3fcff">한 문</td>
        <td>林 埈 億</td>
      </tr>
      <tr>
        <td bgcolor="#e3fcff">주민등록번호</td>
        <td colspan="3">010519-******</td>
      </tr>
      <tr>
        <td bgcolor="#e3fcff">E-mail</td>
        <td colspan="3">isaac1@gachon.ac.kr</td>
      </tr>
      <tr>
        <td bgcolor="#e3fcff">전화번호</td>
        <td>031-000-0000</td>
        <td bgcolor="#e3fcff">휴대폰</td>
        <td>010-4444-5555</td>
      </tr>
      <tr>
        <td bgcolor="#e3fcff">우편번호</td>
        <td>00000</td>
        <td bgcolor="#e3fcff">비상연락처</td>
        <td>000-0000-0000</td>
      </tr>
      <tr>
        <td bgcolor="#e3fcff">주소</td>
        <td colspan="3">경기도 00시 00로 000</td>
      </tr>
    </table>

    <em>2. 학력사항</em>
    <table>
      <tr>
        <th bgcolor="#e3fcff">기간</th>
        <th bgcolor="#e3fcff">상세내용</th>
        <th bgcolor="#e3fcff">비고</th>
      </tr>
      <tr>
        <td>초등학교</td> <td>00 초등학교</td> <td>2008-2013</td>
      </tr>
      <tr>
        <td>중학교</td> <td>00 중학교</td> <td>2014-2016</td>
      </tr>
      <tr>
        <td>고등학교</td> <td>00 고등학교</td> <td>2017-2019</td>
      </tr>
      <tr>
        <td>대학교 </td> <td>가천대학교</td> <td>2020-</td>
      </tr>
    </table>

    <em>3. 경력사항</em>
    <table>
      <tr>
        <th bgcolor="#e3fcff">기간</th>
        <th bgcolor="#e3fcff">관련</th>
      </tr>
      <tr>
        <td>2020~2021</td> <td>단기 인턴 진행</td>
      </tr>
      <tr>
        <td>2021.06~2021.09</td> <td>리액트 프로젝트 진행</td>
      </tr>
      <tr>
        <td>2021.12~2022.02</td> <td>공모전 참여</td>
      </tr>
    </table>

    <em>4. 개인 능력 및 장단점</em>
    <table>
      <tr height="30">
        <td rowspan="2" bgcolor="#e3fcff">자격증 및 포상</td>
        <td colspan="3">정보처리기사</td>
        <td colspan="1">산업인력공단</td>
      </tr>
      <tr height="30">
        <td colspan="3">운전면허증</td>
        <td colspan="1">경찰청</td>
      </tr>
      <tr height="30">
        <td rowspan="2" bgcolor="#e3fcff">컴퓨터 능력</td>
        <td colspan="2">리액트</td>
        <td bgcolor="#e3fcff">상/중/하</td>
        <td>상</td>
      </tr>
      <tr height="30">
        <td colspan="2">Mysql</td>
        <td bgcolor="#e3fcff">상/중/하</td>
        <td>중</td>
      </tr>
      <tr height="30">
        <td rowspan="2" bgcolor="#e3fcff">취미</td>
        <td colspan="2">음악 감상</td>
        <td bgcolor="#e3fcff">특기</td>
        <td>적응력</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
em{
  margin-left: 50px;
  font-weight: bolder;
  font-size: 2em;
  text-align: left;
}
.resume {
  width: 80px;
}
#me {
  background-image: url(../assets/임준억_증명사진.jpg);
  background-size: cover;
  background-repeat: no-repeat;

}

table{
  width: 90%;
  margin-left: 50px;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  font-size: 1.5em;
  padding-bottom: 30px;
}
td,th{
  width: 20%;
  /*!important*/
  border: 1px solid black;

}
tr{
  height: 30;
}
</style>
