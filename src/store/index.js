import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      activeIndex: null,
      listItems: [
        { title: 'Home', path: '/' },
        { title: '자기소개', path: '/introduction' },
        { title: '프로젝트', path: '/project' },
        { title: '공모전', path: '/contest' },
        { title: '경험', path: '/experience' },
        { title: '연락처', path: '/contact' },
      ],
    };
  },
  mutations: {
    // 상태를 업데이트하는 뮤테이션
    updateActiveIndex(state, index) {
      state.activeIndex = index;
    },
  },
  getters: {
  },
  actions: {
  },
});