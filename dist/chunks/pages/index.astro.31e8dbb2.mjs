import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, b as addAttribute, m as maybeRenderHead } from '../astro.d584cb1b.mjs';
import { g as getCollection, $ as $$ContactCTA, a as $$CallToAction, b as $$Pill } from './_...slug_.astro.15196aca.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404.astro.4f203fa9.mjs';
import { $ as $$Grid, a as $$PortfolioPreview, b as $$Skills, c as $$DynamicTagline } from './index-offline.astro.a01d4112.mjs';
/* empty css                           */import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                                   *//* empty css                                   *//* empty css                               *//* empty css                         *//* empty css                                   *//* empty css                         *//* empty css                                   *//* empty css                                   *//* empty css                                   */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://juanroccia.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  const fundingOptions = [
    {
      name: "CVU",
      value: "0000003100009764710288",
      isLink: false
    },
    {
      name: "Alias",
      value: "juanroccia.mp",
      isLink: false
    },
    {
      name: "PayPal",
      value: "https://paypal.me/juanroccia",
      isLink: true
    },
    {
      name: "Patreon",
      value: "https://www.patreon.com/juanroccia",
      isLink: true
    },
    {
      name: "Cafecito",
      value: "https://cafecito.app/juanroccia",
      isLink: true
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["\n	", '<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">\n		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">\n			<header class="hero astro-J7PV25F6">\n				', '\n\n				<img alt="Juan Roccia with sunglasses in a the woods with Dalle-2." width="480" height="620" src="/assets/portrait.jpg" class="astro-J7PV25F6">\n			</header>\n\n			', '\n		</div>\n\n		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">\n			<section class="section with-background with-cta astro-J7PV25F6">\n				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">\n					<h3 class="astro-J7PV25F6">Trabajos Destacados</h3>\n					<p class="astro-J7PV25F6">Estos son algunos de mis trabajos m\xE1s recientes.</p>\n				</header>\n\n				<div class="gallery astro-J7PV25F6">\n					', '\n				</div>\n\n				<div class="cta astro-J7PV25F6">\n					', '\n				</div>\n			</section>\n\n			<section class="section with-background bg-variant astro-J7PV25F6">\n				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">\n					<h3 class="astro-J7PV25F6">Funding</h3>\n					<p class="astro-J7PV25F6">\n						If you like what I do and want to support my work, there is a way to do it..\n					</p>\n				</header>\n\n				<div class="gallery astro-J7PV25F6">\n					<script type="module" src="/copyClipboard.js"><\/script>\n\n					', "\n				</div>\n			</section>\n		</main>\n\n		", "\n	</div>\n"])), maybeRenderHead(), renderComponent($$result2, "Hero", $$Hero, { "title": "Hola, mi nombre es Juan Roccia", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					
					<div class="astro-J7PV25F6">
						${renderComponent($$result3, "DynamicTagline", $$DynamicTagline, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "DynamicTagline", $$DynamicTagline, { "class": "astro-J7PV25F6" })}
					` })}</div>
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Developer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.33em", "class": "astro-J7PV25F6" })} AI Specialist` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "terminal-window", "size": "1.33em", "class": "astro-J7PV25F6" })} Automation Engineer` })}
					</div>
				` }), renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" }), renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
									${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
								</li>`)}` }), renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
						View All
						${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
					` }), renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${fundingOptions.map((option) => option.isLink ? renderTemplate`<li class="mention-card astro-J7PV25F6">
											<a${addAttribute(option.value, "href")} class="funding-link astro-J7PV25F6">${option.name}</a>
										</li>` : renderTemplate`<li class="mention-card astro-J7PV25F6">
											<button class="funding-button astro-J7PV25F6"${addAttribute(option.value, "data-copy-value")}>${option.name}</button>
										</li>`)}` }), renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })) })}`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
