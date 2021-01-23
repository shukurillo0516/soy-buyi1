<template>
  <div class="table-wrapper d-flex flex-column flex-grow-1">
    <div class="table-responsive flex-grow-1 d-flex flex-column px-3" style="min-height: 50vh;">
    <table class="table table-sm border table-bordered border-dark">
      <TableHeader
                   :colSpan="colSpan"
      />
      <TableBody
                 :colSpan="colSpan"
      />
    </table>
  </div>
  </div>
</template> 

<script>
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'
export default {
  name: 'Table',
  components: {
    TableHeader,
    TableBody
  },
  data(){
    return {
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    colSpan() {
      if(this.windowWidth > 650){
        return 2
      } else {
        return 1
      }
    }
  },
}
</script>
<style scoped>
table {
  background: white;
  font-size: 100%
}
</style>