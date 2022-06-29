<template>
  <div class="contact">
    <div class="container">
      <h1 class="section-title">Me contacter</h1>

      <div class="contact-container">
        <h2 class="contact-title colored">Avez vous une question ?</h2>
        <h3>Je suis disponible</h3>
      </div>

      <div class="contact-me-container">
        <div class="wrapper">
          <div class="contact-me-content">
            <i class="fa-solid fa-phone fa-2x colored"></i>
            <h3 class="contact-me-content-title">Par téléphone</h3>
            <h3 class="contact-me-content-text">06 83 10 03 51</h3>
          </div>

          <div class="contact-me-content">
            <i class="fa-solid fa-envelope fa-2x colored"></i>
            <h3 class="contact-me-content-title">Par mail</h3>
            <a
              class="contact-me-content-text"
              href="mailto:williamfort.lmgl@gmail.com"
              >williamfort.lmgl@gmail.com</a
            >
          </div>
          <div class="contact-me-content">
            <i class="fa-brands fa-linkedin fa-2x colored"></i>
            <h3 class="contact-me-content-title">Sur Linkedin</h3>
            <a
              class="contact-me-content-text"
              href="https://www.linkedin.com/in/william-fort/"
              target="_blank"
              >https://www.linkedin.com/in/william-fort/</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.contact {
  width: 75%;
  height: 100vh;

  .container {
    width: 80%;
    margin: 50px auto;

    .contact-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Poppins", sans-serif;
      .contact-title {
        font-size: 1.8rem;
        margin: 0;
      }
      h3 {
        font-size: 1.4rem;
      }
    }

    .contact-me-container {
      margin-top: 150px;
      width: 100%;

      .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-content: center;
        grid-template-rows: 1fr;
      }
      .contact-me-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        font-family: "Popins", sans-serif;
        font-weight: 600;

        &:nth-child(3) {
          margin-top: 50px;
          grid-column: 1 / span 2;
        }

        a {
          position: relative;
          text-decoration: none;
          color: $light-mode-text-color;

          &::before {
            position: absolute;
            left: 0;
            bottom: -5px;
            content: "";
            display: block;
            width: 30%;
            height: 3px;
            border-radius: 25px;
            transition: 0.5s;
          }

          &:hover::before {
            width: 100%;
          }
        }

        .contact-me-content-title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .contact-me-content-text {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 0;
          padding: 0;
        }
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      margin-top: 50px;
      font-family: "Poppins", sans-serif;

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        input {
          outline: none;
          border-radius: 50px;
          padding: 15px;
        }

        textarea {
          outline: none;
          border-radius: 15px;
          resize: none;
          padding: 15px;
        }

        label {
          font-size: 1.2rem;
          font-weight: bold;
        }
      }
    }
  }
}

@media screen and (max-width: 1334px) {
  .contact {
    width: 100%;
    height: 100%;

    .container {
      .contact-me-container {
        display: flex;
        flex-direction: column;
        gap: 75px;
        margin: 50px auto auto auto;
        align-items: center;
        padding-bottom: 50px;

        .wrapper {
          display: flex;
          flex-direction: column;
          gap: 75px;
        }

        .contact-me-content {
          align-items: flex-start;
        }
      }
    }
  }
}

@media screen and (max-width: 493px) {
  .contact {
    .container {
      .contact-container {
        .contact-title {
          font-size: 1.5rem;
        }
        h3 {
          font-size: 1.2rem;
        }
      }

      .contact-me-container {
        .contact-me-content {
          .contact-me-content-title {
            font-size: 1.3rem;
          }
          .contact-me-content-text {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 412px) {
  .contact {
    .container {
      .contact-container {
        .contact-title {
          font-size: 1.3rem;
        }
        h3 {
          font-size: 1rem;
        }
      }

      .contact-me-container {
        .contact-me-content {
          .contact-me-content-title {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 364px) {
  .contact {
    .container {
      .contact-container {
        .contact-title {
          font-size: 1rem;
        }
        h3 {
          font-size: 0.9rem;
        }
      }
      .section-title {
        font-size: 2rem;
      }
    }
  }
}
</style>
