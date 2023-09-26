import { createStore } from 'vuex';
import requestsModule from './modules/requests/index.js';
import roomsModule from './modules/rooms/index.js';

const store = createStore({
  modules: {
    rooms: roomsModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
