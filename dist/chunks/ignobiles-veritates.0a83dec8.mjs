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

				const html = updateImageReferences("<h2 id=\"ignobiles-veritates-una-plataforma-para-el-pensamiento-crítico\">Ignobiles Veritates: Una plataforma para el pensamiento crítico</h2>\n<p>Este proyecto consistió en el desarrollo de un sitio web completo para la publicación de artículos, ensayos y análisis sobre diversos temas desde una perspectiva filosófica y crítica. El sitio está diseñado para ofrecer una experiencia de lectura óptima con una navegación intuitiva y un diseño limpio que pone el foco en el contenido.</p>\n<h3 id=\"características-principales\">Características principales</h3>\n<ul>\n<li>Diseño responsivo que se adapta a todos los dispositivos</li>\n<li>Sistema de gestión de contenidos para facilitar la publicación de nuevos artículos</li>\n<li>Categorización y etiquetado de contenidos para mejorar la navegabilidad</li>\n<li>Optimización SEO para incrementar la visibilidad en motores de búsqueda</li>\n<li>Integración con redes sociales para ampliar el alcance del contenido</li>\n</ul>\n<h3 id=\"tecnologías-utilizadas\">Tecnologías utilizadas</h3>\n<p>Para este proyecto implementé tecnologías actuales que garantizan un rendimiento óptimo y una experiencia de usuario fluida:</p>\n<ul>\n<li>HTML5, CSS3 y JavaScript para la estructura, diseño e interactividad</li>\n<li>Frameworks modernos para una arquitectura robusta y escalable</li>\n<li>Sistema de bases de datos optimizado para consultas rápidas y eficientes</li>\n<li>Herramientas de análisis para monitorear el tráfico y comportamiento de los usuarios</li>\n</ul>\n<p>El resultado es un sitio web profesional que refleja la seriedad del contenido que alberga, brindando a los lectores una plataforma agradable donde pueden sumergirse en reflexiones profundas sobre diversos temas de interés.</p>\n<h3 id=\"sitio-web-ignobilesveritatescom\">Sitio web: <a href=\"https://ignobilesveritates.com/\">ignobilesveritates.com</a></h3>");

				const frontmatter = {"title":"Ignobiles Veritates","publishDate":"2023-04-10T00:00:00.000Z","img":"/assets/stock-10.jpg","img_alt":"Ignobiles Veritates website screenshot","description":"Un sitio web dedicado a proporcionar información, noticias y análisis sobre temas diversos con un enfoque crítico y filosófico.\n","tags":["Web Development","Content Management","Philosophy","Responsive Design"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/ignobiles-veritates.md";
				const url = undefined;
				function rawContent() {
					return "\n## Ignobiles Veritates: Una plataforma para el pensamiento crítico\n\nEste proyecto consistió en el desarrollo de un sitio web completo para la publicación de artículos, ensayos y análisis sobre diversos temas desde una perspectiva filosófica y crítica. El sitio está diseñado para ofrecer una experiencia de lectura óptima con una navegación intuitiva y un diseño limpio que pone el foco en el contenido.\n\n### Características principales\n\n- Diseño responsivo que se adapta a todos los dispositivos\n- Sistema de gestión de contenidos para facilitar la publicación de nuevos artículos\n- Categorización y etiquetado de contenidos para mejorar la navegabilidad\n- Optimización SEO para incrementar la visibilidad en motores de búsqueda\n- Integración con redes sociales para ampliar el alcance del contenido\n\n### Tecnologías utilizadas\n\nPara este proyecto implementé tecnologías actuales que garantizan un rendimiento óptimo y una experiencia de usuario fluida:\n\n- HTML5, CSS3 y JavaScript para la estructura, diseño e interactividad\n- Frameworks modernos para una arquitectura robusta y escalable\n- Sistema de bases de datos optimizado para consultas rápidas y eficientes\n- Herramientas de análisis para monitorear el tráfico y comportamiento de los usuarios\n\nEl resultado es un sitio web profesional que refleja la seriedad del contenido que alberga, brindando a los lectores una plataforma agradable donde pueden sumergirse en reflexiones profundas sobre diversos temas de interés.\n\n### Sitio web: [ignobilesveritates.com](https://ignobilesveritates.com/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ignobiles-veritates-una-plataforma-para-el-pensamiento-crítico","text":"Ignobiles Veritates: Una plataforma para el pensamiento crítico"},{"depth":3,"slug":"características-principales","text":"Características principales"},{"depth":3,"slug":"tecnologías-utilizadas","text":"Tecnologías utilizadas"},{"depth":3,"slug":"sitio-web-ignobilesveritatescom","text":"Sitio web: ignobilesveritates.com"}];
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
