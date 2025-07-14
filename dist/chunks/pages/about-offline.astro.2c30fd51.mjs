import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d584cb1b.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.4f203fa9.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.15196aca.mjs';
/* empty css                                   */import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                         *//* empty css                                   *//* empty css                         *//* empty css                                   *//* empty css                                   *//* empty css                               */
const $$Astro = createAstro("https://juanroccia.github.io");
const $$AboutOffline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutOffline;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Juan Roccia", "description": "About Juan Roccia Lorem Ipsum", "class": "astro-QAKTIWS5" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="stack gap-20 astro-QAKTIWS5">
		<main class="wrapper about astro-QAKTIWS5">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "class": "astro-QAKTIWS5" }, { "default": ($$result3) => renderTemplate`
				<img width="1553" height="873" src="/assets/at-work.jpg" alt="Juan Roccia at work with a colleague" class="astro-QAKTIWS5">
			` })}

			<section class="astro-QAKTIWS5">
				<h2 class="section-title astro-QAKTIWS5">Background</h2>
				<div class="content astro-QAKTIWS5">
					<p class="astro-QAKTIWS5">
						Lorem ipsum dolor sit amet, <a href="https://astro.build/" class="astro-QAKTIWS5">Astro</a> makes people happy.
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum
						id venenatis a condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut sem nulla
						pharetra diam sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
					</p>
					<p class="astro-QAKTIWS5">
						Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Eget gravida cum sociis
						natoque penatibus. Cras fermentum odio eu feugiat pretium nibh. Proin nibh nisl
						condimentum id venenatis. Porta nibh venenatis cras sed felis eget velit. Id diam vel
						quam elementum pulvinar etiam non.
					</p>
					<p class="astro-QAKTIWS5">
						Ultrices tincidunt arcu non sodales neque sodales ut. Sed enim ut sem viverra aliquet
						eget sit amet. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
						Viverra accumsan in nisl nisi scelerisque eu ultrices. In massa tempor nec feugiat nisl
						pretium fusce.
					</p>
				</div>
			</section>
			<section class="astro-QAKTIWS5">
				<h2 class="section-title astro-QAKTIWS5">Education</h2>
				<div class="content astro-QAKTIWS5">
					<p class="astro-QAKTIWS5">Corporis voluptates tenetur laudantium.</p>
				</div>
			</section>
			<section class="astro-QAKTIWS5">
				<h2 class="section-title astro-QAKTIWS5">Skills</h2>
				<div class="content astro-QAKTIWS5">
					<p class="astro-QAKTIWS5">officia unde omnis</p>
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-QAKTIWS5" })}
	</div>
` })}`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/about-offline.astro", void 0);

const $$file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/about-offline.astro";
const $$url = "/about-offline";

export { $$AboutOffline as default, $$file as file, $$url as url };
