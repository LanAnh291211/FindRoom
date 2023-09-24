export default {
    async registerRoom(context, data) {
      const userId = context.rootGetters.userId;
      const roomData = {
        name: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        conditions: data.conditions
      };
  
      const response = await fetch(
        `https://vue-http-demo-85e9e.firebaseio.com/coaches/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(roomData)
        }
      );
  
  
      if (!response.ok) {
          console.log(response);
      }
  
      context.commit('registerRoom', {
        ...roomData,
        id: userId
      });
    },
    async loadRooms(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) {
        return;
      }
  
      const response = await fetch(
        `https://vue-http-demo-85e9e.firebaseio.com/coaches.json`
      );
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
  
      const rooms = [];
  
      for (const key in responseData) {
        const room = {
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          conditions: responseData[key].conditions
        };
        rooms.push(room);
      }
  
      context.commit('setRooms', rooms);
      context.commit('setFetchTimestamp');
    }
  };