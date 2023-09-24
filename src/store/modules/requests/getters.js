export default {
  requests(state, _, _2, rootGetters) {
    const roomId = rootGetters.userId;
    return state.requests.filter(req => req.roomId === roomId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};