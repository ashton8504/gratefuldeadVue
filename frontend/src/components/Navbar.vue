<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">The Grateful Dead</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/"
            >Home</router-link
          >
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Declare a reactive variable
const isActive = ref(true); // Example variable indicating active state

// Function to toggle active state
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<!-- folder issue -->
<style scoped>
@font-face {
  font-family: "GratefulDead";
  src: url("../assets/fonts/Ripple.ttf") format("truetype");
}

.navbar-brand {
  font-family: "GratefulDead", sans-serif;
  font-size: 33px;
  color: #ee1d25;
}

.nav-link {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: black;
}

.nav-link:hover {
  color: #ee1d25;
}

.navbar-nav {
  text-align: center;
}
</style>
