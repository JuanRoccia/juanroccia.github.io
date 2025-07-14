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

				const html = updateImageReferences("<h2 id=\"la-casa-del-tapicero-tradición-en-la-web\">La Casa del Tapicero: Tradición en la web</h2>\n<p>Este proyecto consistió en el desarrollo de una presencia digital para un negocio familiar con décadas de experiencia en el rubro de la tapicería, buscando expandir su alcance y mostrar su trabajo y productos a nuevos clientes potenciales.</p>\n<h3 id=\"el-cliente-y-su-necesidad\">El cliente y su necesidad</h3>\n<p>La Casa del Tapicero es un taller con más de 30 años de experiencia en la restauración, creación y venta de insumos de tapicería. A pesar de su excelente reputación local, carecían de presencia digital para mostrar sus productos y captar clientes fuera de su área inmediata.</p>\n<h3 id=\"solución-implementada\">Solución implementada</h3>\n<p>Desarrollé un sitio web completo que combina elegancia con funcionalidad, destacando la calidad artesanal del trabajo mientras proporciona una experiencia de usuario intuitiva para potenciales clientes.</p>\n<h3 id=\"características-principales\">Características principales</h3>\n<ul>\n<li>Diseño visual que refleja la estética artesanal y tradicional del negocio</li>\n<li>Galería de productos con descripciones detalladas</li>\n<li>Formulario de contacto para solicitar presupuestos personalizado (proximamente)</li>\n<li>Optimización SEO local para mejorar la visibilidad en búsquedas regionales</li>\n<li>Diseño responsivo adaptado a todos los dispositivos</li>\n</ul>\n<h3 id=\"proceso-de-desarrollo\">Proceso de desarrollo</h3>\n<p>El proyecto se realizó siguiendo estas etapas:</p>\n<ol>\n<li>Entrevistas con los propietarios para entender su visión y necesidades</li>\n<li>Investigación de mercado y análisis de la competencia</li>\n<li>Diseño de wireframes y maquetas visuales</li>\n<li>Desarrollo del sitio con tecnologías modernas</li>\n<li>Sesión fotográfica profesional para capturar los trabajos y el taller</li>\n<li>Implementación de SEO local y configuración de Google My Business</li>\n<li>Capacitación a los propietarios para la actualización básica de contenidos</li>\n</ol>\n<h3 id=\"impacto-en-el-negocio\">Impacto en el negocio</h3>\n<p>Tras el lanzamiento del sitio web, La Casa del Tapicero experimentó un aumento significativo en consultas y solicitudes de presupuesto, ampliando su clientela más allá de su zona tradicional de influencia.</p>\n<p>La galería de productos se ha convertido en una herramienta valiosa para mostrar el nivel de acabado y artesanía, ayudando a los clientes potenciales a visualizar la calidad del trabajo antes de visitar físicamente el taller.</p>");

				const frontmatter = {"title":"La Casa del Tapicero","publishDate":"2023-05-15T00:00:00.000Z","img":"/assets/stock-9.jpg","img_alt":"La Casa del Tapicero website screenshot","description":"Sitio web para un negocio familiar dedicado a la tapicería artesanal, destacando sus servicios, galería de trabajos y proceso de restauración.\n","tags":["Web Design","Small Business","Local Artisans","E-commerce"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/casa-del-tapicero.md";
				const url = undefined;
				function rawContent() {
					return "\n## La Casa del Tapicero: Tradición en la web\n\nEste proyecto consistió en el desarrollo de una presencia digital para un negocio familiar con décadas de experiencia en el rubro de la tapicería, buscando expandir su alcance y mostrar su trabajo y productos a nuevos clientes potenciales.\n\n### El cliente y su necesidad\n\nLa Casa del Tapicero es un taller con más de 30 años de experiencia en la restauración, creación y venta de insumos de tapicería. A pesar de su excelente reputación local, carecían de presencia digital para mostrar sus productos y captar clientes fuera de su área inmediata.\n\n### Solución implementada\n\nDesarrollé un sitio web completo que combina elegancia con funcionalidad, destacando la calidad artesanal del trabajo mientras proporciona una experiencia de usuario intuitiva para potenciales clientes.\n\n### Características principales\n\n- Diseño visual que refleja la estética artesanal y tradicional del negocio\n- Galería de productos con descripciones detalladas\n- Formulario de contacto para solicitar presupuestos personalizado (proximamente)\n- Optimización SEO local para mejorar la visibilidad en búsquedas regionales\n- Diseño responsivo adaptado a todos los dispositivos\n\n### Proceso de desarrollo\n\nEl proyecto se realizó siguiendo estas etapas:\n\n1. Entrevistas con los propietarios para entender su visión y necesidades\n2. Investigación de mercado y análisis de la competencia\n3. Diseño de wireframes y maquetas visuales\n4. Desarrollo del sitio con tecnologías modernas\n5. Sesión fotográfica profesional para capturar los trabajos y el taller\n6. Implementación de SEO local y configuración de Google My Business\n7. Capacitación a los propietarios para la actualización básica de contenidos\n\n### Impacto en el negocio\n\nTras el lanzamiento del sitio web, La Casa del Tapicero experimentó un aumento significativo en consultas y solicitudes de presupuesto, ampliando su clientela más allá de su zona tradicional de influencia.\n\nLa galería de productos se ha convertido en una herramienta valiosa para mostrar el nivel de acabado y artesanía, ayudando a los clientes potenciales a visualizar la calidad del trabajo antes de visitar físicamente el taller.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"la-casa-del-tapicero-tradición-en-la-web","text":"La Casa del Tapicero: Tradición en la web"},{"depth":3,"slug":"el-cliente-y-su-necesidad","text":"El cliente y su necesidad"},{"depth":3,"slug":"solución-implementada","text":"Solución implementada"},{"depth":3,"slug":"características-principales","text":"Características principales"},{"depth":3,"slug":"proceso-de-desarrollo","text":"Proceso de desarrollo"},{"depth":3,"slug":"impacto-en-el-negocio","text":"Impacto en el negocio"}];
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
