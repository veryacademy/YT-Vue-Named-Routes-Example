<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-1">
      <div class="container mw-0 px-3">
        <a class="navbar-brand" href="#">
        <router-link :to = "{ name:'home' }" exact>Vue Router</router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <router-link :to = "{ name:'home' }" exact>Home</router-link>
            </li>
            <li class="nav-item">
            <router-link :to = "{ name:'blog' }" exact>Blog</router-link>
            </li>
            <li class="nav-item">
            <router-link :to = "{ name:'policy' }" exact>Policy</router-link>
            </li>
            <li class="nav-item">
            <router-link :to = "{ name:'about' }" exact>About</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<style scoped>
    a {
      color:#000;
  }
  .nav-item a {
    display: block;
    padding: .5rem 1rem;
}
</style>