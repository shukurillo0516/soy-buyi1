<template>
  <thead>
    <tr>
      <th rowspan="2">{{ $t("table.code") }}</th>
      <th rowspan="2">{{ $t("table.name") }}</th>
      <th rowspan="2">{{ $t("table.unit") }}</th>
      <th rowspan="2">{{ $t("table.price") }}</th>
      <th :colspan="colSpan" class="col-xs-1 ">{{ $t("table.balance_beginning") }}</th>
      <th :colspan="colSpan" class="col-xs-1">{{ $t("table.arrival") }}</th>  
      <th :colspan="colSpan">{{ $t("table.expenditure") }}</th>
      <th :colspan="colSpan">{{ $t("table.balance_end") }}</th>
    </tr>
    <tr>
      <th>{{ $t("table.qty") }}</th>
      <th v-if="colSpan == 2">{{ $t("table.summ") }}</th>
      <th>{{ $t("table.qty") }}</th>
      <th v-if="colSpan == 2"> {{ $t("table.summ") }}</th>
      <th>{{ $t("table.qty") }}</th>
      <th v-if="colSpan == 2"> {{ $t("table.summ") }}</th>
      <th>{{ $t("table.qty") }}</th>
      <th v-if="colSpan == 2"> {{ $t("table.summ") }}</th>
    </tr>
  </thead>
</template> 

<script>


export default {
  name: 'TableHeader',
  props: {
    colSpan: {
      type: Number,
      required: true
    }
  }
}
</script>
<style  scoped>

</style>