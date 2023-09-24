export default {
    rooms(state) {
      return state.rooms;
    },
    hasRooms(state) {
      return state.rooms && state.rooms.length > 0;
    },
    isRoom(_, getters, _2, rootGetters) {
      const rooms = getters.rooms;
      const userId = rootGetters.userId;
      return rooms.some(room=> room.id === userId);
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
  };