export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.d584cb1b.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const page = () => import('../../chunks/pages/index-offline.astro.a01d4112.mjs').then(n => n.i);

export { page };
