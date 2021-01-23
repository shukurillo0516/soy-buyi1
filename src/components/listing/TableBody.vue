<template>
  <tbody>
     <tr>
      <th scope="row">0001</th>
      <td>Benzin AI - 80</td>
      <td>Liter</td>
      <td>5 000</td>
      <td>0</td>
      <td v-if="colSpan == 2">0</td>
      <td>2 000</td>
      <td v-if="colSpan == 2">10 000 000</td>
      <td>2 000</td>
      <td v-if="colSpan == 2">10 000 000</td>
      <td>2 000</td>
      <td v-if="colSpan == 2">10 000 000</td>
    </tr>
  </tbody>
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