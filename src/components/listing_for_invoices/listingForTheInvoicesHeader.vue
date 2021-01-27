<template>
  <thead v-if="show">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Provider</th>
      <th scope="col">Name</th>
      <th scope="col">Liter</th>
      <th scope="col">VAT</th>
      <th scope="col">Summ</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    show() {
      if(this.id >= 0 && this.id <= 1 ){
        return true 
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
</style>