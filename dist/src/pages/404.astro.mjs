export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.d584cb1b.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const page = () => import('../../chunks/pages/404.astro.4f203fa9.mjs').then(n => n._);

export { page };
