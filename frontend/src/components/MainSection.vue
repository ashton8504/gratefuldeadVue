<template>
  <img
    src="../assets/img/stealYourFace.png"
    alt="Grateful Dead Logo"
    class="stealYourFace flip-image"
  />
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="header-main">The Grateful Dead</h1>
        <hr class="main-line" />
      </div>
    </div>

    <div class="col">
      <p class="main-paragraph">
        The Grateful Dead was an American rock band formed in 1965 in Palo Alto,
        California. The band is known for its eclectic style, which fused
        elements of rock, folk, country, jazz, bluegrass, blues, gospel, and
        psychedelic rock; for live performances of lengthy instrumental jams;
        and for its devoted fan base, known as "Deadheads". "Their music",
        writes Lenny Kaye, "touches on ground that most other groups don't even
        know exists". These various influences were distilled into a diverse and
        psychedelic whole that made the Grateful Dead "the pioneering Godfathers
        of the jam band world". The band was ranked 57th by Rolling Stone
        magazine in its The Greatest Artists of All Time issue. The band was
        inducted into the Rock and Roll Hall of Fame in 1994 and a recording of
        their May 8, 1977, performance at Cornell University's Barton Hall was
        added to the National Recording Registry of the Library of Congress in
        2012. The Grateful Dead have sold more than 35 million albums worldwide.
      </p>
    </div>
  </div>

  <div class="container text-center">
    <div class="col">
      <div class="column-content">
        <img
          src="../assets/img/gratefulpeanuts.png"
          alt="Image of Grateful Dead as Snoopy and Woodstock"
        />
        <p class="snoopy">Even Snoopy and Woodstock felt the groove</p>
      </div>
    </div>
  </div>

  <!-- Helpful links section -->
  <div class="col">
    <h2 class="helpful-header">Helpful Links</h2>
    <ul class="helpful-links">
      <li>
        <a
          href="https://www.dead.net/"
          target="_blank"
          rel="noopener noreferrer"
          >Official Grateful Dead Website</a
        >
      </li>
      <li>
        <a
          href="https://www.rukind.com/gdpedia/titles"
          target="_blank"
          rel="noopener noreferrer"
          >Play The Dead</a
        >
      </li>
      <li>
        <a
          href="https://archive.org/details/GratefulDead"
          target="_blank"
          rel="noopener noreferrer"
          >Grateful Dead Archive</a
        >
      </li>
      <!-- Add more links as needed -->
    </ul>
  </div>
</template>

<script setup></script>

<style>
/* Refactored and improved styles */

.stealYourFace {
  display: block;
  margin: 100px auto 0;
  border: 3px solid #ee1d25;
  max-width: 40%;
  min-width: 200px;
  height: auto;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.stealYourFace:hover {
  content: url("../assets/img/gratefulArt.jpg");
  transform: rotateY(180deg);
}

.header-main {
  font-family: "GratefulDead", sans-serif;
  font-size: 3rem;
  color: #bc1218;
  text-align: center;
  margin: 15px auto 10px;
  margin-top: 40px;
}

.main-line {
  width: 15%;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 25px;
  color: #1e2d95;
  border-bottom: 2px solid #1e2d95;
}

.main-paragraph {
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 40px auto;
  font-family: "Trebuchet MS", sans-serif;
  max-width: 800px;
  text-align: justify;
}

.main-paragraph:first-letter {
  font-size: 2rem;
  float: left;
  margin-right: 6px;
  color: #bc1218;
  line-height: 1;
  font-family: "GratefulDead", sans-serif;
}

.container {
  margin-top: 50px;
}

.column-content img {
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
  border: 3px solid #ee1d25;
}

p,
.helpful-header {
  font-family: "Montserrat", sans-serif;
}

.snoopy {
  margin-top: 10px;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.helpful-links {
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin: 0;
}

.helpful-links li {
  margin-bottom: 8px;
}

.helpful-links a {
  color: #285fc6;
  text-decoration: none;
  transition: color 0.3s;
}

.helpful-links a:hover {
  color: #bc1218;
}

.helpful-header {
  font-size: 2rem;
  color: #bc1218;
  text-align: center;
  margin: 15px auto 20px;
}

@media (max-width: 768px) {
  .column-content img {
    width: 80%;
    height: auto;
  }
}
</style>
