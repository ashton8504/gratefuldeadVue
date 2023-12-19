<template>
  <div class="profile-page">
    <div class="about-me">
      <div class="row">
        <div id="ashton-contact" class="col-md-4 ashton-contact">
          <img
            src="../assets/myLogo/myLogo.jpg"
            alt="About Me Image"
            class="myLogo img-fluid rounded-circle"
          />
          <div class="social-icons text-center">
            <a
              href="https://www.linkedin.com/in/ashton-codes/"
              target="_blank"
              class="social-icon me-3"
              id="social-linkedin"
            >
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
              <img
                src="../assets/myLogo/github.png"
                alt="GitHub"
                class="social-image github-image"
              />
            </a>
          </div>
        </div>

        <div class="col-md-5 col-xs-12">
          <h2 class="about-me-class">About</h2>
          <p>
            Hello, I'm <span id="name-text-ashton">Ashton</span>, an
            enthusiastic software developer. Completed various advanced courses
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
          <div class="d-block d-md-none">
            <p>
              <strong class="strong-links">Links:</strong><br />
              <a href="https://ashton-codes.com/" target="_blank"
                >Portfolio Website</a
              >
              <br />
              <a
                href="https://www.linkedin.com/in/ashton-codes/"
                target="_blank"
                >LinkedIn</a
              ><br />
              <a href="https://github.com/ashton8504" target="_blank">GitHub</a
              ><br />
            </p>
          </div>
          <hr class="about-me-divider" />
        </div>
      </div>

      <div class="about-me">
        <div class="row">
          <div id="ashton-contact" class="col-md-4 jason-contact">
            <div class="second-section">
              <img
                src="../assets/myLogo/jasonLogoUpdated.jpg"
                alt="About Me Image"
                class="myLogo jason-logo img-fluid rounded-circle"
              />
              <div class="social-icons text-center" id="social-icons">
                <a
                  href="https://github.com/jasonsnod"
                  target="_blank"
                  class="social-icon me-3"
                >
                  <img
                    src="../assets/myLogo/github.png"
                    alt="GitHub"
                    class="social-image github-image"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jasonsnoddy-programmer-musician/"
                  target="_blank"
                  class="social-icon me-3"
                  id="social-linkedin"
                >
                  <img
                    src="../assets/myLogo/linkedin.png"
                    alt="LinkedIn"
                    class="social-image"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-xs-12 jason-paragraph">
            <p>
              Hello, I'm <span id="name-text-jason">Jason</span>, a junior
              software engineer. Recently, I have finished Tech Elevator's
              Full-Stack Developer course. I am currently searching for software
              engineer jobs focusing on the back-end.
            </p>
            <p>
              I rely on both my intelligence and will-power to follow through on
              projects and find the best possible solution to problems I face. I
              also love playing music, frisbee, and being in the outdoors with a
              good book. You'll find me on the side of a mountain reading some
              good Tolkien.
            </p>
            <div class="d-block d-md-none">
              <p>
                <strong>Links:</strong><br />
                <!-- PLACEHOLDER FOR YOUR PORTFOLIO WEBSITE -->
                <!-- <a href="https://github.com/ashton8504" target="_blank"
                  >Portfolio Website</a
                >
                <br /> -->
                <a
                  href="https://www.linkedin.com/in/jasonsnoddy-programmer-musician/"
                  target="_blank"
                  >LinkedIn</a
                ><br />
                <a href="https://github.com/jasonsnod" target="_blank">GitHub</a
                ><br />
              </p>
            </div>
          </div>
          <hr class="about-me-border" />
        </div>
      </div>
    </div>

    <div class="contact-me">
      <div class="row">
        <div class="col-md-6 contact-form">
          <h2 class="contact-heading">Contact Me</h2>
          <form @submit.prevent="submitForm" v-if="showForm">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                v-model="email"
                @keydown.enter.prevent="handleEnterKey"
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
                v-model="message"
                @keydown.enter.prevent="handleEnterKey"
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
      showForm: true,
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

        console.log("testing", response);
        const data = await response.json();
        console.log(data);
        this.email = "";
        this.message = "";
        this.submitted = true;
        this.showForm = false;

        setTimeout(() => {
          this.showForm = true;
          this.submitted = false;
          this.showImage = false;
        }, 3000);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    handleEnterKey(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        this.submitForm();
      }
    },
  },
};
</script>

<style scoped>
.profile-page {
  margin-top: 40px;
}
.myLogo {
  max-width: 100%;
  height: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1px;
}

#ashton-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.ashton-contact {
  margin-top: 80px;
}

.jason-paragraph {
  margin-top: 20px;
}

.myLogo:hover {
  cursor: pointer;
  content: url("../assets/img/jerry-garcia.gif");
  width: 200px;
  height: 200px;
}

.jason-logo:hover {
  cursor: pointer;
  content: url("../assets/img/kramer.gif");
  width: 200px;
  height: 200px;
}

.about-me-divider {
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #ee221a;
  border-bottom: 2px solid #ee221a;
}

.about-me-border {
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #0069aa;
  border-bottom: 2px solid #0069aa;
}

p {
  font-size: 20px;
}

/* Trying to make name more bold */
#name-text-ashton {
  color: #0069aa;
  font-weight: bold;
}

#name-text-jason {
  color: #ee221a;
  font-weight: bold;
}

/* Second profile */

.second-section {
  margin-top: 50px;
}

#social-icons {
  margin-right: 20px;
}

.social-icons {
  margin-top: 20px;
  margin-left: 15px;
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
  text-align: center;
  margin-top: 150px;
  width: 70%;
  margin: 0 auto;
}
.contact-form {
  flex: 1;
  width: 50%;
}

.contact-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
  margin-right: 90px;
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

/* Styles for mobile view social media links */

.d-block.d-md-none p {
  font-size: 1.2em;
}

.d-block.d-md-none p strong {
  font-size: 1.4em;
  letter-spacing: 1px;
}

.d-block.d-md-none p a {
  color: #3366cc;
  text-decoration: none;
}

.d-block.d-md-none p a:hover {
  color: #ff6600; /* Change the color to the hover color you prefer */
  text-decoration: none; /* Remove underline on hover */
}

/* For mobile devices */
@media (max-width: 768px) {
  #ashton-contact {
    padding-left: 0;
    border: none;
    text-align: center;
  }

  #ashton-contact img {
    max-width: 100%;
    height: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border-radius: 50%;
    margin-bottom: 30px;
  }
  .profile-page {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-me-class {
    display: none;
  }

  .social-icons {
    display: none;
  }

  .about-me,
  .col-md-5 {
    padding: 0 15px;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  #email,
  #message {
    width: calc(100% - 30px);
    margin: 10px auto;
    padding: 10px;
  }

  .btn-primary {
    width: 80%;
    margin: 20px auto;
  }

  .about-me-class,
  .contact-heading,
  .form-label {
    font-size: 1.8rem;
  }

  p {
    font-size: 18px;
  }

  .contact-form {
    margin-right: 0;
  }

  .contact-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 20px;
  }

  .col-md-6.contact-form {
    width: 100%;
  }
}

@media (min-width: 992px) {
  #ashton-contact {
    padding-left: 280px;
  }
}
</style>
