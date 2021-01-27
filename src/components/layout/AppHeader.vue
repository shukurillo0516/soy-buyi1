<template>
<div class="navbar shadow-lg" >
  <b-navbar class="mx-3" type="white" variant="white">
    
    <b-navbar-nav class="nav">
      <b-nav-text>
        SpaceMan
      </b-nav-text>
      <router-link to="/">
        <b-nav-text class="mx-4">
          Soy Buyi XK    
        </b-nav-text>
      </router-link>
      
      <router-link :to="{ name: 'WorkflowPage', params: {id: 0}}">
       <button type="button" class="btn btn-primary incoming-btn">{{ $t("navbar.incomingInvoices") }}</button>
      </router-link>
      <router-link :to="{ name: 'WorkflowPage', params: {id: 1}}">
        <button type="button" class="btn btn-primary">{{ $t("navbar.selling") }}</button>
      </router-link>  
    </b-navbar-nav>  
  
  </b-navbar>
    <b-navbar-nav class="right">
      <!-- Navbar dropdowns -->
      <b-dropdown class="mx-md-4 mt-n5" id="dropdown-1" :text=" $t('navbar.language')" >
        <b-dropdown-item href="#">En</b-dropdown-item>
        <b-dropdown-item href="#">O'z</b-dropdown-item>
      </b-dropdown>
    
    </b-navbar-nav>
</div>
</template>
<script>
export default {
  
}
</script>  
<style  scoped>

.navbar{
  padding-top: 0.1vh;
  padding-bottom: 0.1vh;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 4vh;
  background: white;

}

.nav {
  display:flex;
  align-items: center;
  justify-content: space-between;
}

.incoming-btn {
  margin-right: 2vw;
}
  
</style>