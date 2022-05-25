<template>
  <div>
    <nav class="navbar bg-white navbar-light d-flex justify-content-start">
      <router-link class="navbar-brand videogames" :to="{ name: 'videogames' }">VIDEO GAMES</router-link>
      <router-link class="navbar-brand contact" :to="{ name: 'contact' }">CONTACT</router-link>
    </nav>

    <div class="container mt-4 mb-4 pl-3 pr-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
nav {
 margin: 40px;
 padding-left: 150px;
 font-weight: bolder;

}
</style>
