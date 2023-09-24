<template>
  <div>
    <section>
      <base-card>
        <h2>{{ name }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="condition in conditions" :key="condition" :type="condition" :title="condition"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedRoom: null,
    };
  },
  computed: {
    name() {
      return this.selectedRoom.name;
    },
    areas() {
      return this.selectedRoom.areas;
    },
    rate() {
      return this.selectedRoom.hourlyRate;
    },
    description() {
      return this.selectedRoom.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.selectedRoom = this.$store.getters['rooms/rooms'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>