import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      rooms: [
        {
          id: 'c1',
          name: '112',
          conditions: ['light', 'pool', 'elevator'],
          description:
            "A room with full of service and reasonable price!",
          price: 35
        },
        {
          id: 'c2',
          name: '123',
          conditions: ['light', 'elevator'],
          description:
            'A room opposite the beach with beautìul view.',
          price: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
