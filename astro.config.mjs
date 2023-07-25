// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});
import { defineConfig } from 'astro';

export default defineConfig({
  buildOptions: {
    out: 'docs/', // directorio de salida
  },
  publicPath: '/juanroccia.github.io/', // ruta pública
});
