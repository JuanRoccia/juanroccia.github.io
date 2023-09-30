import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.d584cb1b.mjs';
import { g as getCollection, $ as $$ContactCTA, a as $$CallToAction, b as $$Pill } from './_...slug_.astro.360fb12b.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404.astro.42380d0c.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$4 = createAstro("https://juanroccia.github.io");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/components/Grid.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://juanroccia.github.io");
const $$DynamicTagline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DynamicTagline;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<span id="frase-dinamica"></span>
<script type="module" src="/fraseDinamica.js"><\/script>

<!-- tagline='Soy un desarrollador de software, productor de podcast y escritor de art\xEDculos.' -->
<!-- {fraseCompleta} -->`])), maybeRenderHead());
}, "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/components/DynamicTagline.astro", void 0);

const $$Astro$2 = createAstro("https://juanroccia.github.io");
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/components/PortfolioPreview.astro", void 0);

const $$Astro$1 = createAstro("https://juanroccia.github.io");
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills astro-AB4IHPZS">
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Full Stack</h2>
		<p class="astro-AB4IHPZS">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Industry Leader</h2>
		<p class="astro-AB4IHPZS">Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Strategy-Minded</h2>
		<p class="astro-AB4IHPZS">Urna porttitor rhoncus dolor purus non enim praesent ornare.</p>
	</div>
</section>`;
}, "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/components/Skills.astro", void 0);

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
      value: "juan.pago.alias",
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["\n	", '<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">\n		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">\n			<header class="hero astro-J7PV25F6">\n				', '\n\n				<img alt="Juan Roccia with sunglasses in a the woods with Dalle-2." width="480" height="620" src="/assets/portrait.jpg" class="astro-J7PV25F6">\n			</header>\n\n			', '\n		</div>\n\n		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">\n			<section class="section with-background with-cta astro-J7PV25F6">\n				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">\n					<h3 class="astro-J7PV25F6">Trabajos Destacados</h3>\n					<p class="astro-J7PV25F6">Estos son algunos de mis trabajos m\xE1s recientes.</p>\n				</header>\n\n				<div class="gallery astro-J7PV25F6">\n					', '\n				</div>\n\n				<div class="cta astro-J7PV25F6">\n					', `
				</div>
			</section>

			<section class="section with-background bg-variant astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Funding</h3>
					<p class="astro-J7PV25F6">
						If you like what I do and want to support my work, there is a way to do it..
					</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					<!-- <Grid variant="small"> 
						{
							['CVU', 'Alias', 'PayPal', 'Patreon', 'Cafecito'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid> -->

					<!-- <CopyToClipboard><CopyToClipboard /> -->
					<!-- Aseg\xFArate de que el script que contiene la funci\xF3n copyToClipboard est\xE9 importado en tu componente o p\xE1gina -->
					<script type="module" src="/copyClipboard.js"><\/script>

					`, '\n\n					<!-- <Grid variant="small"> \n						{\n							fundingOptions.map((option) => (\n								option.isLink\n									? <li class="mention-card">\n											<a href={option.value} class="funding-link">{option.name}</a>\n										</li>\n									: <li class="mention-card">\n											<button onClick={option.onClick} class="funding-button">{option.name}</button>\n										</li>\n							))\n						}\n					</Grid> -->\n\n				</div>\n			</section>\n		</main>\n\n		', "\n	</div>\n"])), maybeRenderHead(), renderComponent($$result2, "Hero", $$Hero, { "title": "Hola, mi nombre es Juan Roccia", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					
					<div class="astro-J7PV25F6">
						${renderComponent($$result3, "DynamicTagline", $$DynamicTagline, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "DynamicTagline", $$DynamicTagline, { "class": "astro-J7PV25F6" })}
					` })}</div>
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Developer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "microphone-stage", "size": "1.33em", "class": "astro-J7PV25F6" })} Producer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "class": "astro-J7PV25F6" })} Writer` })}
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
}, "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
