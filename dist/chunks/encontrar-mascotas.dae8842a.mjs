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

				const html = updateImageReferences("<h2 id=\"encontrar-mascotas-reuniendo-familias-con-sus-compañeros-perdidos\">Encontrar Mascotas: Reuniendo familias con sus compañeros perdidos</h2>\n<p>Desarrollé esta aplicación con el objetivo de abordar un problema común en nuestra comunidad: mascotas perdidas que no logran reencontrarse con sus familias debido a la falta de un sistema centralizado y eficiente para reportar y buscar.</p>\n<h3 id=\"sitio-web-encontrar-mascotasvercelapp\">Sitio web: <a href=\"https://encontrar-mascotas.vercel.app/\">encontrar-mascotas.vercel.app</a></h3>\n<h3 id=\"la-problemática\">La problemática</h3>\n<p>Perder una mascota es una experiencia angustiante para cualquier familia. Los métodos tradicionales como carteles en la calle o publicaciones en redes sociales generales tienen un alcance limitado y no están optimizados para este propósito específico.</p>\n<h3 id=\"la-solución\">La solución</h3>\n<p>Desarrollé una aplicación web dedicada exclusivamente a conectar personas que han perdido sus mascotas con aquellas que han encontrado animales, utilizando tecnologías modernas para maximizar las posibilidades de éxito.</p>\n<h3 id=\"características-clave\">Características clave</h3>\n<ul>\n<li>Interfaz intuitiva para publicar mascotas perdidas/encontradas</li>\n<li>Sistema de filtrado por ubicación, tipo de animal y características</li>\n<li>Notificaciones automáticas cuando hay coincidencias potenciales</li>\n<li>Integración con mapas para visualizar las zonas de búsqueda</li>\n<li>Función de compartir en redes sociales para ampliar el alcance</li>\n<li>Diseño completamente responsivo para acceso desde cualquier dispositivo</li>\n</ul>\n<h3 id=\"tecnologías-implementadas\">Tecnologías implementadas</h3>\n<p>La aplicación fue construida utilizando React para el frontend, con un backend optimizado para gestionar las búsquedas y coincidencias de manera eficiente. El despliegue en Vercel garantiza un rendimiento rápido y una disponibilidad constante.</p>\n<h3 id=\"impacto-social\">Impacto social</h3>\n<p>Más allá del logro técnico, este proyecto representa una contribución real a la comunidad, ayudando a reunir familias con sus queridas mascotas y reduciendo el sufrimiento tanto de los animales como de sus dueños. Cada reencuentro exitoso es una confirmación del valor social de la tecnología bien aplicada.</p>\n<p><a href=\"https://encontrar-mascotas.vercel.app/\">Visitar sitio</a></p>");

				const frontmatter = {"title":"Encontrar Mascotas","publishDate":"2024-03-20T00:00:00.000Z","img":"/assets/stock-1.jpg","img_alt":"Encontrar Mascotas app screenshot","description":"Aplicación web para ayudar a reunir mascotas perdidas con sus dueños a través de un sistema de publicación y búsqueda.\n","tags":["Web App","Community Service","React","Vercel","Social Impact"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/encontrar-mascotas.md";
				const url = undefined;
				function rawContent() {
					return "\n## Encontrar Mascotas: Reuniendo familias con sus compañeros perdidos\n\nDesarrollé esta aplicación con el objetivo de abordar un problema común en nuestra comunidad: mascotas perdidas que no logran reencontrarse con sus familias debido a la falta de un sistema centralizado y eficiente para reportar y buscar.\n\n### Sitio web: [encontrar-mascotas.vercel.app](https://encontrar-mascotas.vercel.app/)\n\n### La problemática\n\nPerder una mascota es una experiencia angustiante para cualquier familia. Los métodos tradicionales como carteles en la calle o publicaciones en redes sociales generales tienen un alcance limitado y no están optimizados para este propósito específico.\n\n### La solución\n\nDesarrollé una aplicación web dedicada exclusivamente a conectar personas que han perdido sus mascotas con aquellas que han encontrado animales, utilizando tecnologías modernas para maximizar las posibilidades de éxito.\n\n### Características clave\n\n- Interfaz intuitiva para publicar mascotas perdidas/encontradas\n- Sistema de filtrado por ubicación, tipo de animal y características\n- Notificaciones automáticas cuando hay coincidencias potenciales\n- Integración con mapas para visualizar las zonas de búsqueda\n- Función de compartir en redes sociales para ampliar el alcance\n- Diseño completamente responsivo para acceso desde cualquier dispositivo\n\n### Tecnologías implementadas\n\nLa aplicación fue construida utilizando React para el frontend, con un backend optimizado para gestionar las búsquedas y coincidencias de manera eficiente. El despliegue en Vercel garantiza un rendimiento rápido y una disponibilidad constante.\n\n### Impacto social\n\nMás allá del logro técnico, este proyecto representa una contribución real a la comunidad, ayudando a reunir familias con sus queridas mascotas y reduciendo el sufrimiento tanto de los animales como de sus dueños. Cada reencuentro exitoso es una confirmación del valor social de la tecnología bien aplicada.\n\n[Visitar sitio](https://encontrar-mascotas.vercel.app/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"encontrar-mascotas-reuniendo-familias-con-sus-compañeros-perdidos","text":"Encontrar Mascotas: Reuniendo familias con sus compañeros perdidos"},{"depth":3,"slug":"sitio-web-encontrar-mascotasvercelapp","text":"Sitio web: encontrar-mascotas.vercel.app"},{"depth":3,"slug":"la-problemática","text":"La problemática"},{"depth":3,"slug":"la-solución","text":"La solución"},{"depth":3,"slug":"características-clave","text":"Características clave"},{"depth":3,"slug":"tecnologías-implementadas","text":"Tecnologías implementadas"},{"depth":3,"slug":"impacto-social","text":"Impacto social"}];
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
