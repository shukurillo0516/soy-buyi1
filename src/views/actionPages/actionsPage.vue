<template>
  <div class="mx-3">
    <div align="center" >
      <h1 v-if="destinationId == 0">This is page for incoming invoices!</h1>
      <h1 v-if="destinationId == 1">This is the selling page!</h1>
    </div>
    <TheCard  />
  </div>
</template>

<script>
import TheCard from "@/components/accepting_invoices/card.vue" 
export default {
  components: {
    TheCard,
  },
  computed: {
    destinationId(){
      return this.$route.params.id
    } 
  }
}
</script> 

<style scoped>
h1{
  margin-top: -30px;
  margin-bottom: 15px;
}
</style>

