import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d584cb1b.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.15196aca.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.4f203fa9.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index-offline.astro.a01d4112.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                                   *//* empty css                                   *//* empty css                               *//* empty css                         *//* empty css                                   *//* empty css                         *//* empty css                                   *//* empty css                                   *//* empty css                                   */
const $$Astro = createAstro("https://juanroccia.github.io");
const $$WorkOffline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkOffline;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Juan Roccia", "description": "Learn about Juan Roccia's most recent projects" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="stack gap-20">
		<main class="wrapper stack gap-8">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "Mi Trabajo", "tagline": "Podes ver los proyectos m\xE1s recientes a continuaci\xF3n para hacerte una idea de mi talento y experiencia.", "align": "start" })}
			${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
							${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}
						</li>`)}` })}
		</main>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
	</div>
` })}`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/work-offline.astro", void 0);

const $$file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/work-offline.astro";
const $$url = "/work-offline";

export { $$WorkOffline as default, $$file as file, $$url as url };
