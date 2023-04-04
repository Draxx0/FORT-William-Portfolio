import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// SCRIPT GOOGLE ANALYTICS
const asyncScript = document.createElement("script");
asyncScript.setAttribute("async", "true");
asyncScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.VUE_APP_GOOGLE_ANALYTICS_ID}`;
document.head.appendChild(asyncScript);

const script = document.createElement("script");
script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.VUE_APP_GOOGLE_ANALYTICS_ID}'
    `;
document.head.appendChild(script);
