<template>
  <div>
    <b-form>
      <div>
        <b-form-datepicker class="mb-2" v-model="date"></b-form-datepicker>
      </div>
      <b-form-group>
        <b-form-input v-model="provider" required placeholder="Company's name"></b-form-input>
        <b-form-input v-model="productName" required placeholder="AI-80"></b-form-input>
        <b-form-input v-model="qty" required placeholder="Quantity"></b-form-input>
        <b-form-input v-model="summ" required placeholder="Summ"></b-form-input>
      </b-form-group>
    </b-form>
    <b-button variant="success" @click="onSubmit">Submit</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      provider: '',
      productName: '',
      qty: '',
      summ: ''
    }
  },
  computed: {
    vat() {
      let vat = this.summ * 15 / 115 
      return Math.round(vat)
    },
    destinationId(){
      return this.$route.params.id
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('acceptInvoice', {
        date: this.date,
        provider: this.provider,
        productName: this.productName,
        vat: this.vat,
        qty: this.qty,
        summ: this.summ,
        id: this.destinationId
      }, { root: true })
    }
  }  
}
</script>
<style scoped>
input{
  margin: 15px 0px
}
</style>