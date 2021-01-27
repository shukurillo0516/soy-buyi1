<template>
  <div align='center'>
  <b-card
    style="max-width: 30rem;"
    class="mb-2"
  >
    <pre>
      <TheForm />
    </pre>
  </b-card>
</div>
</template>

<script>
import TheForm from './form.vue'
export default {
  name: "Card",
  components: {
    TheForm
  }
}
</script>