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

				const html = updateImageReferences("<h2 id=\"blog-personal-mi-espacio-digital-de-expresión\">Blog Personal: Mi espacio digital de expresión</h2>\n<p>Este proyecto constituye mi plataforma personal para compartir conocimientos, experiencias y reflexiones sobre el mundo tecnológico y del desarrollo. Diseñado como un espacio que refleja mi identidad profesional mientras ofrece contenido de valor para la comunidad.</p>\n<h3 id=\"sitio-web-juanrocciavercelapp\">Sitio web: <a href=\"https://juanroccia.vercel.app/\">juanroccia.vercel.app</a></h3>\n<h3 id=\"objetivos-del-proyecto\">Objetivos del proyecto</h3>\n<ul>\n<li>Crear un espacio para compartir conocimientos técnicos y experiencias profesionales</li>\n<li>Establecer una presencia digital consistente que refuerce mi marca personal</li>\n<li>Ofrecer recursos y tutoriales útiles para otros desarrolladores</li>\n<li>Documentar mi progreso y aprendizajes en diferentes áreas tecnológicas</li>\n</ul>\n<h3 id=\"características-implementadas\">Características implementadas</h3>\n<p>El blog cuenta con diversas funcionalidades que mejoran tanto la experiencia de creación como la de lectura:</p>\n<ul>\n<li>Sistema de categorización y etiquetado para una navegación intuitiva</li>\n<li>Búsqueda avanzada para localizar rápidamente contenido específico</li>\n<li>Integración con redes sociales para ampliar el alcance de los artículos</li>\n<li>Sección de comentarios para fomentar la interacción con los lectores</li>\n<li>Analítica detallada para entender qué contenido genera mayor interés</li>\n<li>Diseño responsivo y optimizado para diferentes dispositivos</li>\n</ul>\n<h3 id=\"tecnologías-utilizadas\">Tecnologías utilizadas</h3>\n<p>Para desarrollar esta plataforma utilicé tecnologías modernas que garantizan rendimiento, escalabilidad y facilidad de mantenimiento:</p>\n<ul>\n<li>Framework de frontend moderno para una experiencia de usuario fluida</li>\n<li>Sistema de gestión de contenidos personalizado según mis necesidades específicas</li>\n<li>Estrategias de caché y optimización para tiempos de carga mínimos</li>\n<li>Implementación de SEO avanzado para mejorar la visibilidad en buscadores</li>\n</ul>\n<h3 id=\"impacto-y-resultados\">Impacto y resultados</h3>\n<p>Más allá de ser un proyecto personal, el blog se ha convertido en una herramienta valiosa para establecer conexiones profesionales, compartir conocimientos y contribuir a la comunidad de desarrollo. Los artículos técnicos y tutoriales han sido especialmente bien recibidos, generando un tráfico constante y comentarios positivos de los lectores.</p>");

				const frontmatter = {"title":"Blog Personal","publishDate":"2023-08-15T00:00:00.000Z","img":"/assets/stock-6.jpg","img_alt":"Blog personal screenshot","description":"Plataforma de blog personal donde comparto ideas, tutoriales y reflexiones sobre tecnología, desarrollo y tendencias digitales.\n","tags":["Content Creation","Web Development","Knowledge Sharing","Personal Brand"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/blog.md";
				const url = undefined;
				function rawContent() {
					return "\n## Blog Personal: Mi espacio digital de expresión\n\nEste proyecto constituye mi plataforma personal para compartir conocimientos, experiencias y reflexiones sobre el mundo tecnológico y del desarrollo. Diseñado como un espacio que refleja mi identidad profesional mientras ofrece contenido de valor para la comunidad.\n\n### Sitio web: [juanroccia.vercel.app](https://juanroccia.vercel.app/)\n\n### Objetivos del proyecto\n\n- Crear un espacio para compartir conocimientos técnicos y experiencias profesionales\n- Establecer una presencia digital consistente que refuerce mi marca personal\n- Ofrecer recursos y tutoriales útiles para otros desarrolladores\n- Documentar mi progreso y aprendizajes en diferentes áreas tecnológicas\n\n### Características implementadas\n\nEl blog cuenta con diversas funcionalidades que mejoran tanto la experiencia de creación como la de lectura:\n\n- Sistema de categorización y etiquetado para una navegación intuitiva\n- Búsqueda avanzada para localizar rápidamente contenido específico\n- Integración con redes sociales para ampliar el alcance de los artículos\n- Sección de comentarios para fomentar la interacción con los lectores\n- Analítica detallada para entender qué contenido genera mayor interés\n- Diseño responsivo y optimizado para diferentes dispositivos\n\n### Tecnologías utilizadas\n\nPara desarrollar esta plataforma utilicé tecnologías modernas que garantizan rendimiento, escalabilidad y facilidad de mantenimiento:\n\n- Framework de frontend moderno para una experiencia de usuario fluida\n- Sistema de gestión de contenidos personalizado según mis necesidades específicas\n- Estrategias de caché y optimización para tiempos de carga mínimos\n- Implementación de SEO avanzado para mejorar la visibilidad en buscadores\n\n### Impacto y resultados\n\nMás allá de ser un proyecto personal, el blog se ha convertido en una herramienta valiosa para establecer conexiones profesionales, compartir conocimientos y contribuir a la comunidad de desarrollo. Los artículos técnicos y tutoriales han sido especialmente bien recibidos, generando un tráfico constante y comentarios positivos de los lectores.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"blog-personal-mi-espacio-digital-de-expresión","text":"Blog Personal: Mi espacio digital de expresión"},{"depth":3,"slug":"sitio-web-juanrocciavercelapp","text":"Sitio web: juanroccia.vercel.app"},{"depth":3,"slug":"objetivos-del-proyecto","text":"Objetivos del proyecto"},{"depth":3,"slug":"características-implementadas","text":"Características implementadas"},{"depth":3,"slug":"tecnologías-utilizadas","text":"Tecnologías utilizadas"},{"depth":3,"slug":"impacto-y-resultados","text":"Impacto y resultados"}];
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
