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

				const html = updateImageReferences("<h2 id=\"gimnasio-levron-presencia-digital-para-un-espacio-de-bienestar\">Gimnasio Levron: Presencia digital para un espacio de bienestar</h2>\n<p>Este proyecto consistió en crear una presencia digital completa para un gimnasio local, ofreciendo una plataforma donde los clientes potenciales pueden conocer las instalaciones, servicios y valores del negocio.</p>\n<h3 id=\"nota-proyecto-interno-dashboard-administrativo\">Nota: Proyecto interno (Dashboard administrativo)</h3>\n<h3 id=\"objetivos-del-proyecto\">Objetivos del proyecto</h3>\n<p>El cliente necesitaba una plataforma digital que:</p>\n<ul>\n<li>Presentara sus instalaciones y equipamiento de manera atractiva</li>\n<li>Mostrara información sobre las diferentes clases y actividades disponibles</li>\n<li>Facilitara a los potenciales clientes conocer los planes y precios</li>\n<li>Proporcionara un medio de contacto directo con el gimnasio</li>\n</ul>\n<h3 id=\"solución-implementada\">Solución implementada</h3>\n<p>Desarrollé un sitio web completamente responsivo que cumple con todos los objetivos planteados, con un diseño moderno y dinámico que refleja la energía y profesionalismo del gimnasio.</p>\n<h3 id=\"características-destacadas\">Características destacadas</h3>\n<ul>\n<li>Galería de imágenes optimizada para mostrar las instalaciones</li>\n<li>Sección de horarios de clases con filtros para facilitar la búsqueda</li>\n<li>Formulario de contacto integrado para consultas directas</li>\n<li>Integración con Google Maps para facilitar la ubicación</li>\n<li>Optimización SEO para mejorar el posicionamiento local</li>\n</ul>\n<h3 id=\"resultados\">Resultados</h3>\n<p>Desde su lanzamiento, el sitio ha contribuido significativamente a aumentar la visibilidad del gimnasio, resultando en un incremento de consultas y nuevas inscripciones. El cliente ha manifestado su satisfacción con la funcionalidad y estética del sitio, que ha cumplido con creces las expectativas iniciales.</p>\n<p><a href=\"https://gimnasiolevron.com.ar/\">Visitar sitio</a></p>");

				const frontmatter = {"title":"Gimnasio Levron","publishDate":"2024-02-10T00:00:00.000Z","img":"/assets/stock-3.jpg","img_alt":"Gimnasio Levron website screenshot","description":"Sitio web para un gimnasio local, diseñado para mostrar sus instalaciones, clases y planes de membresía.\n","tags":["Web Development","Responsive Design","Business","Local Services"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/gimnasio-levron.md";
				const url = undefined;
				function rawContent() {
					return "\n## Gimnasio Levron: Presencia digital para un espacio de bienestar\n\nEste proyecto consistió en crear una presencia digital completa para un gimnasio local, ofreciendo una plataforma donde los clientes potenciales pueden conocer las instalaciones, servicios y valores del negocio.\n\n### Nota: Proyecto interno (Dashboard administrativo)\n\n### Objetivos del proyecto\n\nEl cliente necesitaba una plataforma digital que:\n- Presentara sus instalaciones y equipamiento de manera atractiva\n- Mostrara información sobre las diferentes clases y actividades disponibles\n- Facilitara a los potenciales clientes conocer los planes y precios\n- Proporcionara un medio de contacto directo con el gimnasio\n\n### Solución implementada\n\nDesarrollé un sitio web completamente responsivo que cumple con todos los objetivos planteados, con un diseño moderno y dinámico que refleja la energía y profesionalismo del gimnasio.\n\n### Características destacadas\n\n- Galería de imágenes optimizada para mostrar las instalaciones\n- Sección de horarios de clases con filtros para facilitar la búsqueda\n- Formulario de contacto integrado para consultas directas\n- Integración con Google Maps para facilitar la ubicación\n- Optimización SEO para mejorar el posicionamiento local\n\n### Resultados\n\nDesde su lanzamiento, el sitio ha contribuido significativamente a aumentar la visibilidad del gimnasio, resultando en un incremento de consultas y nuevas inscripciones. El cliente ha manifestado su satisfacción con la funcionalidad y estética del sitio, que ha cumplido con creces las expectativas iniciales.\n\n[Visitar sitio](https://gimnasiolevron.com.ar/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"gimnasio-levron-presencia-digital-para-un-espacio-de-bienestar","text":"Gimnasio Levron: Presencia digital para un espacio de bienestar"},{"depth":3,"slug":"nota-proyecto-interno-dashboard-administrativo","text":"Nota: Proyecto interno (Dashboard administrativo)"},{"depth":3,"slug":"objetivos-del-proyecto","text":"Objetivos del proyecto"},{"depth":3,"slug":"solución-implementada","text":"Solución implementada"},{"depth":3,"slug":"características-destacadas","text":"Características destacadas"},{"depth":3,"slug":"resultados","text":"Resultados"}];
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
