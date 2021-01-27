<template>
  <div>
    <table class=" table  table-hover table-striped">
      <TheHeader 
        :id="id"
      />
      <TheBody/>
    </table>  
  </div>
    
</template>
<script>
import TheHeader from './listingForTheInvoicesHeader'
import TheBody from './bodyListingForTheInvoices.vue'
export default {
  components: {
    TheHeader,
    TheBody,
  },
  props: {
    id : Number
  },  
}
</script>


<style scoped>
table{
  background: white;
}

</style>