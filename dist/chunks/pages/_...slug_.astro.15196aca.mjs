import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.d584cb1b.mjs';
import { $ as $$Icon, a as $$BaseLayout, b as $$Hero } from './404.astro.4f203fa9.mjs';
/* empty css                                   *//* empty css                                   *//* empty css                               */
// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/audiogpt.md": () => import('../audiogpt.5aee1427.mjs'),"/src/content/work/blog.md": () => import('../blog.c6c87211.mjs'),"/src/content/work/casa-del-tapicero.md": () => import('../casa-del-tapicero.0e97bd99.mjs'),"/src/content/work/encontrar-mascotas.md": () => import('../encontrar-mascotas.9b6c62c9.mjs'),"/src/content/work/freelance.md": () => import('../freelance.ba439792.mjs'),"/src/content/work/gimnasio-levron.md": () => import('../gimnasio-levron.2bc45607.mjs'),"/src/content/work/ignobiles-veritates.md": () => import('../ignobiles-veritates.45824a34.mjs'),"/src/content/work/portfolio-personal.md": () => import('../portfolio-personal.76df82d6.mjs'),"/src/content/work/proyecto-upso.md": () => import('../proyecto-upso.f532c94c.mjs'),"/src/content/work/trading-ml-sp500.md": () => import('../trading-ml-sp500.9805301f.mjs'),"/src/content/work/vst-plugins.md": () => import('../vst-plugins.a845b63a.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"audiogpt":"/src/content/work/audiogpt.md","blog":"/src/content/work/blog.md","casa-del-tapicero":"/src/content/work/casa-del-tapicero.md","encontrar-mascotas":"/src/content/work/encontrar-mascotas.md","freelance":"/src/content/work/freelance.md","gimnasio-levron":"/src/content/work/gimnasio-levron.md","ignobiles-veritates":"/src/content/work/ignobiles-veritates.md","portfolio-personal":"/src/content/work/portfolio-personal.md","proyecto-upso":"/src/content/work/proyecto-upso.md","trading-ml-sp500":"/src/content/work/trading-ml-sp500.md","vst-plugins":"/src/content/work/vst-plugins.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/audiogpt.md": () => import('../audiogpt.ca39fe6a.mjs'),"/src/content/work/blog.md": () => import('../blog.8dde8ed8.mjs'),"/src/content/work/casa-del-tapicero.md": () => import('../casa-del-tapicero.018ceb81.mjs'),"/src/content/work/encontrar-mascotas.md": () => import('../encontrar-mascotas.229ba089.mjs'),"/src/content/work/freelance.md": () => import('../freelance.07987897.mjs'),"/src/content/work/gimnasio-levron.md": () => import('../gimnasio-levron.5d40a9b9.mjs'),"/src/content/work/ignobiles-veritates.md": () => import('../ignobiles-veritates.32e01b9c.mjs'),"/src/content/work/portfolio-personal.md": () => import('../portfolio-personal.9c7c1157.mjs'),"/src/content/work/proyecto-upso.md": () => import('../proyecto-upso.0dc33789.mjs'),"/src/content/work/trading-ml-sp500.md": () => import('../trading-ml-sp500.d3c1eb29.mjs'),"/src/content/work/vst-plugins.md": () => import('../vst-plugins.509c5317.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$3 = createAstro("https://juanroccia.github.io");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="astro-BALV45LP">${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/components/CallToAction.astro", void 0);

const $$Astro$2 = createAstro("https://juanroccia.github.io");
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead()}<div class="pill astro-2QEYWK4B">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/components/Pill.astro", void 0);

const $$Astro$1 = createAstro("https://juanroccia.github.io");
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside class="astro-RCDZUQ3A">
	<h2 class="astro-RCDZUQ3A">Interested in working together?</h2>
	${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:juanroccia@gmail.com", "class": "astro-RCDZUQ3A" }, { "default": ($$result2) => renderTemplate`
		Send Me a Message
		${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "class": "astro-RCDZUQ3A" })}
	` })}
</aside>`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/components/ContactCTA.astro", void 0);

const $$Astro = createAstro("https://juanroccia.github.io");
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "class": "astro-QWEKCIQP" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="stack gap-20 astro-QWEKCIQP">
		<div class="stack gap-15 astro-QWEKCIQP">
			<header class="astro-QWEKCIQP">
				<div class="wrapper stack gap-2 astro-QWEKCIQP">
					<a class="back-link astro-QWEKCIQP" href="/work/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-QWEKCIQP" })} Work</a>
					${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "class": "astro-QWEKCIQP" }, { "default": ($$result3) => renderTemplate`
						<div class="details astro-QWEKCIQP">
							<div class="tags astro-QWEKCIQP">
								${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-QWEKCIQP" }, { "default": ($$result4) => renderTemplate`${t}` })}`)}
							</div>
							<p class="description astro-QWEKCIQP">${entry.data.description}</p>
						</div>
					` })}
				</div>
			</header>
			<main class="wrapper astro-QWEKCIQP">
				<div class="stack gap-10 content astro-QWEKCIQP">
					${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} class="astro-QWEKCIQP">`}
					<div class="content astro-QWEKCIQP">
						${renderComponent($$result2, "Content", Content, { "class": "astro-QWEKCIQP" })}
					</div>
				</div>
			</main>
		</div>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-QWEKCIQP" })}
	</div>
` })}`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/work/[...slug].astro", void 0);

const $$file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, $$CallToAction as a, $$Pill as b, getCollection as g };
