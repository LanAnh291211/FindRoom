export default {
    registerRoom(state, payload) {
      state.rooms.push(payload);
    },
    setRooms(state, payload) {
      state.rooms = payload;
    },
    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime();
    }
  };