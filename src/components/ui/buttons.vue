<template>
  <div class="buttons mb-3">
    <div v-for="(name, i) in text"  :key="i" >
      <router-link :to="{ name: 'AcceptInvoicePage', params: {id: i }}">
        <b-button variant="primary">{{ name }}</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      required: true
    }
  }
}
</script>  

<style scoped>
.buttons {
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -15px;
}
</style>