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

				const html = updateImageReferences("<h2 id=\"portfolio-personal-mi-carta-de-presentación-digital\">Portfolio Personal: Mi carta de presentación digital</h2>\n<p>Este proyecto es el sitio web que estás visitando actualmente, diseñado para presentar mi trabajo, habilidades y experiencia profesional de una manera atractiva y accesible.</p>\n<h3 id=\"sitio-web-este-mismo-sitio\">Sitio web: Este mismo sitio</h3>\n<h3 id=\"objetivos-del-proyecto\">Objetivos del proyecto</h3>\n<p>Crear una plataforma que sirva como carta de presentación digital, mostrando mis habilidades, proyectos y logros de una manera que refleje mi estilo y capacidades técnicas.</p>\n<h3 id=\"características-destacadas\">Características destacadas</h3>\n<ul>\n<li>Diseño minimalista pero impactante que pone el foco en el contenido</li>\n<li>Animaciones sutiles y transiciones fluidas para mejorar la experiencia de usuario</li>\n<li>Showcases interactivos de proyectos con descripciones detalladas</li>\n<li>Sección de habilidades con visualizaciones dinámicas</li>\n<li>Integración con GitHub para mostrar actividad de contribución</li>\n<li>Formulario de contacto con validación avanzada</li>\n<li>Modo oscuro/claro según las preferencias del usuario</li>\n</ul>\n<h3 id=\"tecnologías-implementadas\">Tecnologías implementadas</h3>\n<p>Este portfolio está construido con React para garantizar una experiencia de usuario fluida y componentes reutilizables. El despliegue en Vercel asegura tiempos de carga rápidos y una disponibilidad constante.</p>\n<p>Algunas de las tecnologías específicas utilizadas incluyen:</p>\n<ul>\n<li>React Hooks para la gestión del estado</li>\n<li>CSS Modules para estilos encapsulados</li>\n<li>Framer Motion para animaciones fluidas</li>\n<li>React Intersection Observer para efectos de aparición</li>\n<li>NextJS para optimización de SEO y rendimiento</li>\n</ul>\n<h3 id=\"proceso-de-desarrollo\">Proceso de desarrollo</h3>\n<p>El desarrollo de este portfolio siguió una metodología centrada en el usuario, comenzando con investigación sobre tendencias actuales en diseño de portfolios, seguido de wireframing, prototipado y finalmente implementación. Cada decisión de diseño y funcionalidad fue tomada considerando cómo mejoraría la percepción de mi trabajo y habilidades.</p>\n<p>Este proyecto no solo sirve como muestra de mi trabajo, sino que en sí mismo es una demostración de mis capacidades técnicas y mi enfoque estético.</p>\n<p><a href=\"https://juanroccia.github.io/\">Visitar sitio</a></p>");

				const frontmatter = {"title":"Portfolio Personal","publishDate":"2024-03-05T00:00:00.000Z","img":"/assets/stock-2.jpg","img_alt":"Portfolio personal de Juan Roccia","description":"Portfolio personal moderno desarrollado con las últimas tecnologías web para mostrar mis proyectos y habilidades.\n","tags":["Web Development","React","Vercel","UI/UX","Portfolio"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/portfolio-personal.md";
				const url = undefined;
				function rawContent() {
					return "\n## Portfolio Personal: Mi carta de presentación digital\n\nEste proyecto es el sitio web que estás visitando actualmente, diseñado para presentar mi trabajo, habilidades y experiencia profesional de una manera atractiva y accesible.\n\n### Sitio web: Este mismo sitio\n\n### Objetivos del proyecto\n\nCrear una plataforma que sirva como carta de presentación digital, mostrando mis habilidades, proyectos y logros de una manera que refleje mi estilo y capacidades técnicas.\n\n### Características destacadas\n\n- Diseño minimalista pero impactante que pone el foco en el contenido\n- Animaciones sutiles y transiciones fluidas para mejorar la experiencia de usuario\n- Showcases interactivos de proyectos con descripciones detalladas\n- Sección de habilidades con visualizaciones dinámicas\n- Integración con GitHub para mostrar actividad de contribución\n- Formulario de contacto con validación avanzada\n- Modo oscuro/claro según las preferencias del usuario\n\n### Tecnologías implementadas\n\nEste portfolio está construido con React para garantizar una experiencia de usuario fluida y componentes reutilizables. El despliegue en Vercel asegura tiempos de carga rápidos y una disponibilidad constante.\n\nAlgunas de las tecnologías específicas utilizadas incluyen:\n- React Hooks para la gestión del estado\n- CSS Modules para estilos encapsulados\n- Framer Motion para animaciones fluidas\n- React Intersection Observer para efectos de aparición\n- NextJS para optimización de SEO y rendimiento\n\n### Proceso de desarrollo\n\nEl desarrollo de este portfolio siguió una metodología centrada en el usuario, comenzando con investigación sobre tendencias actuales en diseño de portfolios, seguido de wireframing, prototipado y finalmente implementación. Cada decisión de diseño y funcionalidad fue tomada considerando cómo mejoraría la percepción de mi trabajo y habilidades.\n\nEste proyecto no solo sirve como muestra de mi trabajo, sino que en sí mismo es una demostración de mis capacidades técnicas y mi enfoque estético.\n\n[Visitar sitio](https://juanroccia.github.io/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"portfolio-personal-mi-carta-de-presentación-digital","text":"Portfolio Personal: Mi carta de presentación digital"},{"depth":3,"slug":"sitio-web-este-mismo-sitio","text":"Sitio web: Este mismo sitio"},{"depth":3,"slug":"objetivos-del-proyecto","text":"Objetivos del proyecto"},{"depth":3,"slug":"características-destacadas","text":"Características destacadas"},{"depth":3,"slug":"tecnologías-implementadas","text":"Tecnologías implementadas"},{"depth":3,"slug":"proceso-de-desarrollo","text":"Proceso de desarrollo"}];
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
