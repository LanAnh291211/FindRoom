<template>
  <section>
    <base-card>
      <h2>Register as a room now!</h2>
      <room-form @save-data="saveData"></room-form>
    </base-card>
  </section>
</template>

<script>
import RoomForm from '../../components/rooms/RoomForm.vue';

export default {
  components: {
    RoomForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('rooms/registerRoom', data);
      this.$router.replace('/rooms');
    }
  }
};
</script>