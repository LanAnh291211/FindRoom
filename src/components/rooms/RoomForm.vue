<template>
  <form @submit.prevent="submitForm">
  
    <div class="form-control" :class="{invalid: !name.isValid}">
      <label for="name">name</label>
      <input
        type="text"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">name must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !price.isValid}">
      <label for="price">Hourly price</label>
      <input type="number" id="price" v-model.number="price.val" @blur="clearValidity('price')" />
      <p v-if="!price.isValid">price must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{invalid: !conditions.isValid}">
      <h3>Conditions</h3>
      <div>
        <input
          type="checkbox"
          id="light"
          value="light"
          v-model="conditions.val"
          @blur="clearValidity('conditions')"
        />
        <label for="light">Light</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="pool"
          value="pool"
          v-model="conditions.val"
          @blur="clearValidity('conditions')"
        />
        <label for="pool">Pool</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="elevator"
          value="elevator"
          v-model="conditions.val"
          @blur="clearValidity('conditions')"
        />
        <label for="elevator">Elevator</label>
      </div>
      <p v-if="!conditions.isValid">At least one condition must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
    
      name: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      price: {
        val: null,
        isValid: true,
      },
      conditions: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
    
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.price.val || this.price.val < 0) {
        this.price.isValid = false;
        this.formIsValid = false;
      }
      if (this.conditions.val.length === 0) {
        this.conditions.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.name.val,
        desc: this.description.val,
        price: this.price.val,
        conditions: this.conditions.val,
      };
      console.log(formData );

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>