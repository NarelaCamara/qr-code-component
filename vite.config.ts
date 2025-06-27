import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    origin: "http://localhost:2001",
    port: 2001,
  },
  base: "http://localhost:2001",
  plugins: [
    react(),

    federation({
      name: "qr",
      filename: "remoteEntry.js",
      exposes: {
        "./QRcomponent": "./src/components/QRcomponent.tsx",
      },
      shared: ["react", "react-dom"],
      library: { type: "var", name: "qr" },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
