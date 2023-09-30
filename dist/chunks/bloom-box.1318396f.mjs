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

				const html = updateImageReferences("<p>Estoy trabajando en un emocionante proyecto que busca revolucionar la forma en que los músicos y productores adquieren y utilizan software VST, plugins e instrumentos virtuales. Esta plataforma e-commerce no solo servirá como un mercado para adquirir estas herramientas, sino que también será un espacio donde yo mismo desarrollaré y cargaré plugins e instrumentos virtuales únicos y de alta calidad.</p>\n<p>Para el desarrollo de la plataforma, estoy considerando tecnologías como Django, Astro o React, aprovechando frameworks de diseño como Bootstrap o Tailwind para garantizar una experiencia de usuario fluida y atractiva. En cuanto al desarrollo de los plugins, estoy investigando y experimentando con herramientas como JUCE para garantizar la mejor calidad y compatibilidad en la industria musical.</p>\n<p>El proceso de desarrollo ha sido un viaje de aprendizaje y descubrimiento en el cual aún me encutro investigando en áreas como la generación de música mediante IA. Cada paso me acerca más a la realización de una plataforma que no solo será útil para los músicos y productores, sino que también reflejará mi pasión y compromiso con la innovación en el mundo de la música digital.</p>\n<p>Mantente atento para más actualizaciones y el lanzamiento oficial de la plataforma. ¡El futuro de la música digital está a la vuelta de la esquina!</p>");

				const frontmatter = {"title":"VST Plugins","publishDate":"2019-12-01T00:00:00.000Z","img":"/assets/stock-2.jpg","img_alt":"A bright pink sheet of paper used to wrap flowers curves in front of rich blue background","description":"En desarrollo: Una plataforma dedicada al desarrollo e investigacion de software VST, plugins e instrumentos virtuales.\n","tags":["Dev","E-commerce","Music"]};
				const file = "C:/Users/juanm/Desarrollo Web/GitHubPages-BranchWeb-LinkTree/juanroccia.github.io/src/content/work/bloom-box.md";
				const url = undefined;
				function rawContent() {
					return "\nEstoy trabajando en un emocionante proyecto que busca revolucionar la forma en que los músicos y productores adquieren y utilizan software VST, plugins e instrumentos virtuales. Esta plataforma e-commerce no solo servirá como un mercado para adquirir estas herramientas, sino que también será un espacio donde yo mismo desarrollaré y cargaré plugins e instrumentos virtuales únicos y de alta calidad.\n\nPara el desarrollo de la plataforma, estoy considerando tecnologías como Django, Astro o React, aprovechando frameworks de diseño como Bootstrap o Tailwind para garantizar una experiencia de usuario fluida y atractiva. En cuanto al desarrollo de los plugins, estoy investigando y experimentando con herramientas como JUCE para garantizar la mejor calidad y compatibilidad en la industria musical.\n\nEl proceso de desarrollo ha sido un viaje de aprendizaje y descubrimiento en el cual aún me encutro investigando en áreas como la generación de música mediante IA. Cada paso me acerca más a la realización de una plataforma que no solo será útil para los músicos y productores, sino que también reflejará mi pasión y compromiso con la innovación en el mundo de la música digital.\n\nMantente atento para más actualizaciones y el lanzamiento oficial de la plataforma. ¡El futuro de la música digital está a la vuelta de la esquina!";
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
