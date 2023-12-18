<template>
  <div>
    <!-- 버튼 클릭으로 리스트 보이기/숨기기 -->
    <button id='pt3' @click="toggleList">
      {{ isListVisible ? 'Hide List' : 'Show List' }}
    </button>

    <!-- 리스트 출력 -->
    <ul v-if="isListVisible">
      <h2>함께한 동료들</h2>
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isListVisible = ref(false); // 처음에 리스트를 감춰둠

    const toggleList = () => {
      isListVisible.value = !isListVisible.value; // 클릭할 때마다 리스트 보이기/숨기기 전환
    };

    const partner3ListItems = [
      '1 태 산',
      '2 남다름',
      '3 신당당',
      '4 포인제',
      '5 정준성',
    ];

    return {
      isListVisible,
      toggleList,
      listItems: partner3ListItems,
    };
  },
};
</script>

<style scoped>
h2 {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
}
</style>
