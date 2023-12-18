<template>
  <!-- Header Section -->
  <div class="jumbotron">
    <h1 class="display-4">About The Grateful Dead</h1>
    <p class="lead">
      Once in awhile you get shown the light, in the strangest of places if you
      look at it right
    </p>
    <hr class="my-4" />
    <div class="image-container">
      <img
        class="front-image"
        src="../assets/aboutImg/gratefulEst.jpg"
        alt="Grateful Dead"
      />
      <img
        class="hover-image"
        src="../assets/aboutImg/weirBarbie.jpeg"
        alt="Weir Barbie"
      />
    </div>

    <p class="lead">Weir Everywhere</p>
  </div>
  <!-- Band members -->
  <div class="container">
    <h2 class="text-center mb-4 members-header">Grateful Dead Members</h2>
    <div class="row justify-content-center">
      <!-- Jerry Garcia -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/garciaPixar.jpeg"
            class="card-img-top"
            alt="Jerry Garcia"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Jerry Garcia</h5>
            <p class="card-text">Years Active: 1965 - 1995</p>
          </div>
        </div>
      </div>

      <!-- Bob Weir -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/weirPixar.jpeg"
            class="card-img-top"
            alt="Bob Weir"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Bob Weir</h5>
            <p class="card-text">Years Active: 1965 - Present</p>
          </div>
        </div>
      </div>

      <!-- Phil Lesh -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/philPixar.jpeg"
            class="card-img-top"
            alt="Phil Lesh"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Phil Lesh</h5>
            <p class="card-text">Years Active: 1965 - 1995</p>
          </div>
        </div>
      </div>

      <!-- Bill Kreutzmann -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/billyPixar.jpeg"
            class="card-img-top"
            alt="Bill Kreutzmann"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Bill Kreutzmann</h5>
            <p class="card-text">Years Active: 1965 - Present</p>
          </div>
        </div>
      </div>

      <!-- Brent Mydland -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/brentPixar.jpeg"
            class="card-img-top"
            alt="Brent Mydland"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">Brent Mydland</h5>
            <p class="card-text text-center">Years Active: 1979 - 1990</p>
          </div>
        </div>
      </div>

      <!-- Ron "Pigpen" McKernan -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/pigpenPixar.jpeg"
            class="card-img-top"
            alt="Ron 'Pigpen' McKernan"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Ron "Pigpen" McKernan</h5>
            <p class="card-text">Years Active: 1965 - 1972</p>
          </div>
        </div>
      </div>

      <!-- Mickey Hart -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src="../assets/aboutImg/mickPixar.jpeg"
            class="card-img-top"
            alt="Mickey Hart"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Mickey Hart</h5>
            <p class="card-text">Years Active: 1967 - Present</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="centered-line">
    <hr />
  </div>

  <!-- Setlist API Section -->
  <div class="container mt-5">
    <h2 class="text-center mb-4">Search Information</h2>
    <form @submit.prevent="searchByYear">
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-12">
          <input
            type="number"
            v-model="search.year"
            id="year"
            class="form-control centered-input"
            @keyup.enter="searchByYear"
            min="0"
            max="9999"
            maxlength="4"
            placeholder="Enter a year"
          />
        </div>
      </div>
      <div class="text-center mt-3">
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
    </form>

    <!-- Display search results -->
    <div v-if="searchResults.length">
      <h2 class="text-center mb-4">Search Results</h2>
      <div class="search-results">
        <div
          v-for="(setlistItem, index) in searchResults"
          :key="index"
          class="search-result"
        >
          <h3>{{ setlistItem.eventDate }}</h3>
          <p>
            Venue: {{ setlistItem.venue.name }},
            {{ setlistItem.venue.city.name }}
          </p>
          <div v-for="(set, setIndex) in setlistItem.sets.set" :key="setIndex">
            <h4>{{ set.name }}</h4>
            <ul>
              <li v-for="(song, songIndex) in set.song" :key="songIndex">
                {{ song.name }} - {{ song.info }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      search: {
        year: null,
        state: "",
        city: "",
        song: "",
      },
      searchResults: [],
      error: null,
    };
  },
  methods: {
    async searchByYear() {
      console.log(
        "API URL:",
        `http://localhost:3000/api/setlist?year=${this.search.year}`
      );

      try {
        const response = await axios.get("http://localhost:3000/api/setlist", {
          params: {
            year: this.search.year,
          },
        });

        console.log("Received Data from Server:", response.data);

        this.searchResults = response.data;
        this.clearInput();
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    },
    searchOnEnter() {
      this.searchByYear();
    },
    clearInput() {
      this.search.year = null;
    },
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.members-header {
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 150px;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
}

.image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.front-image,
.hover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
}

.hover-image {
  opacity: 0;
}

.image-container:hover .hover-image {
  opacity: 1;
}

.image-container:hover .front-image {
  opacity: 0;
}
.lead {
  font-size: 38px;
  font-weight: bold;
  color: #343a40;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
}

p {
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.6;
}

.btn-primary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-primary:hover {
  background-color: #495057;
  border-color: #495057;
}

.about-main-image {
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #6c757d;
  max-width: 40%;
  min-width: 200px;
  height: auto;
  border-radius: 30px;

  transition: transform 0.5s ease;
  cursor: pointer;
}

.card {
  border: 2px solid #0069aa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title,
.card-text {
  text-align: center;
}

/* Styles For Search Results */
input[type="number"] {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
}

h2.text-center {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.search-results {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.search-result {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-result {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(33% - 40px);
  margin-bottom: 20px;
  text-align: center;
}

.btn-primary {
  background-color: #2064a0;
  border: 2px solid #2064a0;
  color: white;
  padding: 12px 24px;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-bottom: 50px;
}

.btn-primary:hover {
  background-color: #144177;
  border-color: #144177;
  cursor: pointer;
}

.centered-input {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  border: 2px solid #2064a0;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;
}

.centered-input:hover {
  border-color: #144177;
}

.event-date {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.venue-info {
  color: #333;
}

.venue-name {
  font-weight: bold;
}

.venue-location {
  font-style: italic;
  margin-top: 4px;
}

ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
}

.centered-line {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.centered-line hr {
  border: none;
  height: 2px;
  background-color: black;
  width: 100%;
}

/* Media Queries for Improved Mobile Responsiveness */
@media (max-width: 768px) {
  .jumbotron {
    padding: 2rem 1rem;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 576px) {
  .jumbotron {
    padding: 1rem 0.5rem;
  }

  .image-container {
    width: 200px;
    height: 200px;
  }

  .search-results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-result {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
