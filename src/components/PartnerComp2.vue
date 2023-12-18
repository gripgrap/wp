<template>
  <div>
    <!-- 버튼 클릭으로 리스트 보이기/숨기기 -->
    <button id='pt2' @click="toggleList">
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

    const partner2ListItems = ['1 다석수', '2 모나미', '3 민철중', '4 고지식'];

    return {
      isListVisible,
      toggleList,
      listItems: partner2ListItems,
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
