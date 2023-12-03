<template>
  <div class="profile-page">
    <!-- About Me Section -->
    <div class="about-me">
      <div class="row">
        <div class="col-md-4">
          <img
            src="../assets/myLogo/myLogo.jpg"
            alt="About Me Image"
            class="myLogo img-fluid rounded-circle"
          />
          <!-- Social Media Links -->
          <div class="social-icons text-center">
            <a
              href="https://www.linkedin.com/in/ashton-codes/"
              target="_blank"
              class="social-icon me-3"
              id="social-linkedin"
            >
              <!-- Add an image for LinkedIn -->
              <img
                src="../assets/myLogo/linkedin.png"
                alt="LinkedIn"
                class="social-image"
              />
            </a>
            <a
              href="https://github.com/ashton8504"
              target="_blank"
              class="social-icon me-3"
            >
              <!-- Add an image for GitHub -->
              <img
                src="../assets/myLogo/github.png"
                alt="GitHub"
                class="social-image github-image"
              />
            </a>
            <!-- Add more social media icons -->
          </div>
        </div>

        <div class="col-md-8">
          <h2 class="about-me-class">About Me</h2>
          <p>
            Enthusiastic software developer. Completed various advanced courses
            in web development and continuously engaged in solo projects to
            enhance expertise. Currently pursuing additional learning
            opportunities to expand programming skills further.
          </p>
          <p>
            Known for a proactive problem-solving approach and a talent for
            crafting visually appealing and user-friendly web experiences.
            Outside of coding, passionate about cycling, Nintendo, guitars,
            vinyl, raw denim and of course The Grateful Dead.
          </p>
        </div>
      </div>

      <hr class="about-me-border" />
    </div>

    <div class="contact-me">
      <div class="row">
        <div class="col-md-6 contact-form">
          <h2 class="contact-heading">Contact Me</h2>
          <form @submit.prevent="submitForm" v-if="!submitted">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
          <div v-else class="thank-you">
            <h2>Thanks for submitting!</h2>
            <img
              src="../assets/img/thankYouJerry.jpg"
              alt="Thank You"
              class="thankYou"
              v-show="showImage"
            />
          </div>
        </div>
        <div class="col-md-6 contact-image">
          <img
            src="../assets/aboutImg/furthurBus.jpeg"
            class="further-bus"
            alt="Contact Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      submitted: false,
      showImage: true,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            message: this.message,
          }),
        });

        const data = await response.json();

        this.email = "";
        this.message = "";
        this.submitted = true;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.myLogo {
  max-width: 70%;
  height: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.myLogo:hover {
  cursor: pointer;
  content: url("../assets/img/jerry-garcia.gif");
  width: 200px;
  height: 200px;
}

.social-icons {
  margin-top: 20px;
  margin-left: 32px;
  transition: transform 0.5s ease;
}

.social-image {
  width: 40px;
  height: auto;
}

.github-image {
  width: 57px;
  height: auto;
}
.rounded-circle {
  border: 2px solid #0069aa;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.about-me-class,
.contact-heading {
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.form-label {
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #343a40;
}

.contact-me {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contact-form {
  flex: 1;
  margin-right: 20px;
}
.further-bus {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid #0069aa;
  margin-top: 40px;
}

.thank-you {
  text-align: center;
  margin-top: 40px;
}

.thank-you img {
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@media (min-width: 992px) {
  .about-me {
    padding: 20px;
  }
}
@media (max-width: 768px) {
  .myLogo {
    max-width: 50%;
  }

  .about-me {
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  .about-me-class {
    margin-top: 30px;
  }
  .about-me-border {
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
    width: 80%;
    margin: 20px auto;
  }

  .contact-me {
    text-align: center;
    margin-top: 30px;
  }

  .contact-heading {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .social-icon {
    margin-right: 40px;
  }
  .social-icons {
    margin-top: 20px;
    margin-left: 30px;
  }

  #email,
  #message {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
