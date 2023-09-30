import { j as createVNode, F as Fragment, s as spreadAttributes } from './astro.d584cb1b.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Desde los primeros días de mi carrera como desarrollador, siempre he sentido la necesidad de compartir mis conocimientos y experiencias con la comunidad. Es por eso que decidí crear mi propio blog, una plataforma donde no solo puedo mostrar mis habilidades técnicas, sino también escribir sobre temas que me apasionan.</p>\n<p>Utilizando <strong>React</strong>, una de las bibliotecas de JavaScript más populares y poderosas, pude desarrollar un blog interactivo y dinámico. React me permitió crear una interfaz de usuario rica y reactiva, ofreciendo una experiencia de navegación fluida y agradable para los visitantes del blog.</p>\n<p>El proceso de desarrollo fue una experiencia enriquecedora. No solo pude profundizar en las últimas tecnologías y prácticas de desarrollo web, sino que también tuve la oportunidad de reflexionar sobre la importancia de crear contenido relevante y actualizado para la comunidad.</p>\n<p>El resultado es un blog que no solo es estéticamente agradable, sino también funcional y fácil de navegar. Cada artículo publicado es el resultado de horas de investigación, escritura y revisión, asegurando que cada pieza sea de la más alta calidad.</p>\n<p>La experiencia gratificante de poder desarrollar y crear contenido que pueda ayudar, informar o simplemente entretener a otros es inigualable. Es una sensación de logro que va más allá del código y el diseño, llegando al corazón de por qué hago lo que hago.</p>\n<p>Te invito a visitar mi blog y a sumergirte en los diversos temas y artículos que he preparado para ti. Espero que lo encuentres tan informativo y valioso como yo disfruté creándolo.</p>\n<p><a href=\"https://juanroccia.vercel.app/\">Blog: https://juanroccia.vercel.app/</a></p>");

				const frontmatter = {"title":"Blog","publishDate":"2019-10-02T00:00:00.000Z","img":"/assets/stock-4.jpg","img_alt":"Soft pink and baby blue water ripples together in a subtle texture.","description":"Desarrollo y diseño de un blog personal, una plataforma para compartir conocimientos y experiencias en el mundo del desarrollo web.\n","tags":["Desarrollo Web","Blogging","React"]};
				const file = "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/content/work/h20.md";
				const url = undefined;
				function rawContent() {
					return "\nDesde los primeros días de mi carrera como desarrollador, siempre he sentido la necesidad de compartir mis conocimientos y experiencias con la comunidad. Es por eso que decidí crear mi propio blog, una plataforma donde no solo puedo mostrar mis habilidades técnicas, sino también escribir sobre temas que me apasionan.\n\nUtilizando **React**, una de las bibliotecas de JavaScript más populares y poderosas, pude desarrollar un blog interactivo y dinámico. React me permitió crear una interfaz de usuario rica y reactiva, ofreciendo una experiencia de navegación fluida y agradable para los visitantes del blog.\n\nEl proceso de desarrollo fue una experiencia enriquecedora. No solo pude profundizar en las últimas tecnologías y prácticas de desarrollo web, sino que también tuve la oportunidad de reflexionar sobre la importancia de crear contenido relevante y actualizado para la comunidad.\n\nEl resultado es un blog que no solo es estéticamente agradable, sino también funcional y fácil de navegar. Cada artículo publicado es el resultado de horas de investigación, escritura y revisión, asegurando que cada pieza sea de la más alta calidad.\n\nLa experiencia gratificante de poder desarrollar y crear contenido que pueda ayudar, informar o simplemente entretener a otros es inigualable. Es una sensación de logro que va más allá del código y el diseño, llegando al corazón de por qué hago lo que hago.\n\nTe invito a visitar mi blog y a sumergirte en los diversos temas y artículos que he preparado para ti. Espero que lo encuentres tan informativo y valioso como yo disfruté creándolo.\n\n[Blog: https://juanroccia.vercel.app/](https://juanroccia.vercel.app/)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
