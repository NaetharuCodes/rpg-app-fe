import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// Paths to the certificate and key files
const crtPath = path.resolve(__dirname, "certs", "local.auth.pem");
const keyPath = path.resolve(__dirname, "certs", "local.auth-key.pem");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "local.auth", // Set Vite to respond to the local.auth domain
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(crtPath),
    },
    port: 5173, // if you want to specify the port as well
  },
  plugins: [react()],
});
