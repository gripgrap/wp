<template>
  <div>
    <header>
      <p>꿈나무 개발자</p>
      <p>-임준억의 발자취-</p>
    </header>

    <div class="container">
      <nav class="navigation">
        <ul>
          <li v-for="(item, index) in listItems" :key="index" :class="{ 'active': index === $store.state.activeIndex }" @click="handleItemClick(index)">
            <router-link :to="item.path">
              <!-- <span class="icon"><ion-icon :name="item.icon"></ion-icon></span> -->
              <span class="title">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <main>
        <router-view></router-view>
      </main>
    </div>

    <footer>
      <i>
        Copyright all rights reserved.
      </i>
    </footer>
  </div>
</template>

<script>
import './assets/CSS/App.css'

export default {
  computed: {
    // Vuex의 state에서 listItems를 가져옵니다.
    listItems() {
      return this.$store.state.listItems;
    },
  },
  methods: {
    handleItemClick(index) {
      // Vuex의 commit을 사용하여 상태를 업데이트합니다.
      this.$store.commit('updateActiveIndex', index);
    },
  },
};
</script>
<style scoped>
p {
  margin-bottom: 10px;
}
</style>