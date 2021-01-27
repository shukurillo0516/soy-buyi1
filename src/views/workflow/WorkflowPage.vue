<template>
  <div class="mx-3">
    <TheButton 
      :text = 'text'
    />
    <TheInvoiceTable  
      :id = "destinationId"
    />
  </div>
</template>

<script>
import TheInvoiceTable from "@/components/listing_for_invoices/listingForTheInvoices.vue" 
import TheButton from '../../components/ui/buttons'
export default {
  components: {
    TheInvoiceTable,
    TheButton
  },
  computed: {
    destinationId(){
      return this.$route.params.id
    },
    text(){
      if (this.destinationId === 0) {
        const text = ['accept an invoice', 'go back']
        return text
      } else {
        const text = ['sell an invoice', 'go back']
        return text
      }
    },
  }
}
</script> 

<style scoped>

</style>

