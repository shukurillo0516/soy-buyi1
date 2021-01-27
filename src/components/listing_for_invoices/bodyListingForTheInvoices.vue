<template>
  <tbody>
      <tr v-for="(table, i) in tableContent" :key="i">
        <td scope="row">{{ table.date }}</td>
        <td>{{ table.provider }}</td>
        <td>{{ table.productName }}</td>
        <td>{{ table.qty }}</td>
        <td>{{ table.vat }}</td>
        <td>{{ table.summ }}</td>
      </tr>
    </tbody>
</template>

<script>
import store from '../../store/index'

export default {
  name: 'Body',
  computed: {
    destinationId(){
      return this.$route.params.id
    },
    tableContent(){
      return store.state.app.tableContent[this.destinationId]
    }
  }
}
</script>