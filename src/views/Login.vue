<template>
<div align="center" class="py-5">
  <p>FFFFFFFFFFFFFFFFFFFFF</p>
  <b-card
    align="center"
    header=""
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Title"
    style="max-width: 20rem;"
  >
    <b-card-text>Please enter thise fields.</b-card-text>
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary my-2">Submit</button>
  </form> 
  </b-card>
</div>
</template>
<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>  
<style scoped>

</style>

