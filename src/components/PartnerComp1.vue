<template>
  <div>
    <!-- 버튼 클릭으로 리스트 보이기/숨기기 -->
    <button id='pt1' @click="toggleList">
      {{ isListVisible ? 'Hide List' : 'Show List' }}
    </button>

    
      <ul v-if="isListVisible">
      <h2>함께한 동료들</h2>
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
    </ul>  
   
    <!-- 리스트 출력 -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isListVisible: false, // 처음에 리스트를 감춰둠
      listItems: [
        '1 김철수 2 홍길동',
        '3 김말숙 4 강동동',
        '5 박미선 6 조동현',
        '7 강미나 8 강수영',
        '9 홍수아 10 박당숙',

      ],
    };
  },
  methods: {
    toggleList() {
      this.isListVisible = !this.isListVisible; // 클릭할 때마다 리스트 보이기/숨기기 전환
    },
  },
};
</script>

<style>
h2 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
}
</style>