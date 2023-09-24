<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>${{ price }}/hour</h4>
    <div>
      <base-badge v-for="condition in conditions" :key="condition" :type="condition" :title="condition"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="roomContactLink">Contact</base-button>
      <base-button link :to="roomDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'price', 'conditions'],
  computed: {
    roomContactLink() {
      return this.$route.path + '/' + this.id + '/contact'; // /rooms/c1/contact
    },
    roomDetailsLink() {
      return this.$route.path + '/' + this.id; // /rooms/c1
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>