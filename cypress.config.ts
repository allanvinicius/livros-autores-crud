import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://livros-autores-crud.vercel.app/",
    testIsolation: false,
  },
});
