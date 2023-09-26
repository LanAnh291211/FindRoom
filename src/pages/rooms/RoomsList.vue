<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <room-filter @change-filter="setFilters"></room-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadRooms(true)">Refresh</base-button>
          <base-button v-if="!isRoom && !isLoading" link to="/register">Register as Room Owner</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>

        <ul v-else-if="hasRooms">
          <room-item
            v-for="room in filteredRooms"
            :key="room.id"
            :id="room.id"
            :name="room.name"
            :price="room.price"
            :conditions="room.conditions"
          ></room-item>
          
        </ul>
        <h3 v-else>No Rooms found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RoomItem from '../../components/rooms/RoomItem.vue';
import RoomFilter from '../../components/rooms/RoomFilter.vue';

export default {
  components: {
    RoomItem,
    RoomFilter, 
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        light: true,
        pool: true,
        elevator: true,
      },
    };
  },
  computed: {
    isRoom() {
      return this.$store.getters['rooms/isRoom'];
    },
    filteredRooms() {
      const rooms = this.$store.getters['rooms/rooms'];
      console.log(rooms);
      return rooms.filter((room) => {
        if (this.activeFilters.light && room.conditions.includes('light')) {
          return true;
        }
        if (this.activeFilters.pool && room.conditions.includes('pool')) {
          return true;
        }
        if (this.activeFilters.elevator && room.conditions.includes('elevator')) {
          return true;
        }
        return false;
      });
    },
    hasRooms() {
      return !this.isLoading && this.$store.getters['rooms/hasRooms'];
    },
  },
  created() {
    this.loadRooms();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    a (){
      const rooms = this.$store.getters['rooms/rooms'];
      const roomsLength = rooms ? rooms.length : 0;
      console.log(roomsLength);

    },
    async loadRooms(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('rooms/loadRooms', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>