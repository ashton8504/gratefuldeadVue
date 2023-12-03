<template>
  <div class="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    About,
    Footer,
  },
};
</script>

<style scoped>
/* Global styles for the entire app */
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif; /* Use your preferred font family */
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0; /* Set your desired background color */
}

main {
  flex: 1;
  padding: 20px;
}

/* Navbar styles */
.navbar {
  background-color: #0069aa;
  color: white;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.navbar a {
  color: white;
  text-decoration: none;
}

/* Footer styles */
footer {
  text-align: center;
  background-color: #222;
  color: white;
  padding: 10px 0;
}
</style>
