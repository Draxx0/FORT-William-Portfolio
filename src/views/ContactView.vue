<template>
  <div class="contact">
    <div class="container">
      <h1 class="section-title">Me contacter</h1>

      <div class="contact-container">
        <h2 class="contact-title colored">Avez vous une questions ?</h2>
        <h3>Je suis disponible</h3>
      </div>

      <div class="contact-me-container">
        <div class="contact-me-content">
          <i class="fa-solid fa-phone fa-2x colored"></i>
          <h3 class="contact-me-content-title">Par téléphone</h3>
          <h4 class="contact-me-content-text">06 83 10 03 51</h4>
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

      <div class="contact-container">
        <h2 class="contact-title colored">Envoyez moi un mail</h2>
        <h3>Je les consultes souvent</h3>
      </div>

      <form action="">
        <div class="form-group">
          <label for="name">Prénom - Nom</label>
          <input type="text" id="name" class="form-control" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            class="form-control"
            rows="15"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ContactView",
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.contact {
  width: 75%;

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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      margin-top: 100px;
      width: 100%;
      margin-bottom: 150px;
      .contact-me-content {
        display: flex;
        flex-direction: column;
        align-items: center;
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
</style>
