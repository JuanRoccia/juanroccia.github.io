import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: process.env.NODE_ENV === 'production'
    ? 'https://juanroccia.github.io/juanroccia.github.io'
    : 'http://localhost:5000'
});