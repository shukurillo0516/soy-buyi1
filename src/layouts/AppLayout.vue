<template>
  <div  class="d-flex __container">
    <div class="w-100">
      <AppHeader/>
      <div class="my-5 content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/layout/AppHeader"
export default {
  name: 'AppLayout',
  components: {
    AppHeader,
  }
}
</script>
<style scoped>

</style>