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

				const html = updateImageReferences("<h2 id=\"proyecto-upso-aplicando-conocimientos-académicos-a-soluciones-reales\">Proyecto UPSO: Aplicando conocimientos académicos a soluciones reales</h2>\n<p>Este proyecto representa la culminación de mi formación en la Tecnicatura Universitaria en Tecnologías de Programación de la UPSO, donde apliqué los conocimientos adquiridos para desarrollar una solución integral a una problemática real.</p>\n<h3 id=\"repositorios-github-upso\">Repositorios: <a href=\"https://github.com/orgs/UPSOFullStackDev/repositories\">GitHub UPSO</a></h3>\n<h3 id=\"el-desafío-académico\">El desafío académico</h3>\n<p>Como parte de mi formación universitaria, se nos planteó el reto de desarrollar un sistema que abordara una necesidad concreta, aplicando metodologías de desarrollo profesionales y las tecnologías aprendidas durante la carrera.</p>\n<h3 id=\"solución-implementada\">Solución implementada</h3>\n<p>Desarrollé un sistema de gestión que integra diversos módulos funcionales, implementando una arquitectura robusta y escalable que permite la automatización de procesos anteriormente manuales.</p>\n<h3 id=\"características-principales\">Características principales</h3>\n<ul>\n<li>Arquitectura modular con separación clara de responsabilidades</li>\n<li>Interfaz de usuario intuitiva diseñada con principios de UX/UI</li>\n<li>Sistema de autenticación y autorización basado en roles</li>\n<li>Base de datos relacional optimizada con índices y relaciones eficientes</li>\n<li>API REST para permitir futuras integraciones con otros sistemas</li>\n<li>Documentación exhaustiva tanto técnica como de usuario final</li>\n</ul>\n<h3 id=\"tecnologías-y-metodología\">Tecnologías y metodología</h3>\n<p>El proyecto fue desarrollado utilizando:</p>\n<ul>\n<li>Lenguajes de programación aprendidos durante la carrera</li>\n<li>Frameworks y bibliotecas relevantes para el desarrollo eficiente</li>\n<li>Sistema de control de versiones para la gestión del código</li>\n<li>Metodologías ágiles para la planificación y seguimiento</li>\n<li>Pruebas unitarias y de integración para garantizar la calidad</li>\n</ul>\n<h3 id=\"aprendizajes-y-resultados\">Aprendizajes y resultados</h3>\n<p>Este proyecto no solo me permitió aplicar conocimientos técnicos, sino también desarrollar habilidades blandas esenciales como la gestión del tiempo, la comunicación efectiva y la resolución de problemas complejos.</p>\n<p>La solución final recibió excelentes calificaciones por parte del cuerpo docente y demostró ser una implementación viable para el problema abordado, cumpliendo con todos los requerimientos funcionales y no funcionales establecidos inicialmente.</p>");

				const frontmatter = {"title":"Proyecto UPSO","publishDate":"2023-06-20T00:00:00.000Z","img":"/assets/stock-8.jpg","img_alt":"Proyecto UPSO screenshot","description":"Proyecto académico desarrollado durante la Tecnicatura Universitaria en Tecnologías de Programación de la Universidad Provincial del Sudoeste.\n","tags":["Academic","Software Development","Team Project","University"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/proyecto-upso.md";
				const url = undefined;
				function rawContent() {
					return "\n## Proyecto UPSO: Aplicando conocimientos académicos a soluciones reales\n\nEste proyecto representa la culminación de mi formación en la Tecnicatura Universitaria en Tecnologías de Programación de la UPSO, donde apliqué los conocimientos adquiridos para desarrollar una solución integral a una problemática real.\n\n### Repositorios: [GitHub UPSO](https://github.com/orgs/UPSOFullStackDev/repositories)\n\n### El desafío académico\n\nComo parte de mi formación universitaria, se nos planteó el reto de desarrollar un sistema que abordara una necesidad concreta, aplicando metodologías de desarrollo profesionales y las tecnologías aprendidas durante la carrera.\n\n### Solución implementada\n\nDesarrollé un sistema de gestión que integra diversos módulos funcionales, implementando una arquitectura robusta y escalable que permite la automatización de procesos anteriormente manuales.\n\n### Características principales\n\n- Arquitectura modular con separación clara de responsabilidades\n- Interfaz de usuario intuitiva diseñada con principios de UX/UI\n- Sistema de autenticación y autorización basado en roles\n- Base de datos relacional optimizada con índices y relaciones eficientes\n- API REST para permitir futuras integraciones con otros sistemas\n- Documentación exhaustiva tanto técnica como de usuario final\n\n### Tecnologías y metodología\n\nEl proyecto fue desarrollado utilizando:\n\n- Lenguajes de programación aprendidos durante la carrera\n- Frameworks y bibliotecas relevantes para el desarrollo eficiente\n- Sistema de control de versiones para la gestión del código\n- Metodologías ágiles para la planificación y seguimiento\n- Pruebas unitarias y de integración para garantizar la calidad\n\n### Aprendizajes y resultados\n\nEste proyecto no solo me permitió aplicar conocimientos técnicos, sino también desarrollar habilidades blandas esenciales como la gestión del tiempo, la comunicación efectiva y la resolución de problemas complejos.\n\nLa solución final recibió excelentes calificaciones por parte del cuerpo docente y demostró ser una implementación viable para el problema abordado, cumpliendo con todos los requerimientos funcionales y no funcionales establecidos inicialmente.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"proyecto-upso-aplicando-conocimientos-académicos-a-soluciones-reales","text":"Proyecto UPSO: Aplicando conocimientos académicos a soluciones reales"},{"depth":3,"slug":"repositorios-github-upso","text":"Repositorios: GitHub UPSO"},{"depth":3,"slug":"el-desafío-académico","text":"El desafío académico"},{"depth":3,"slug":"solución-implementada","text":"Solución implementada"},{"depth":3,"slug":"características-principales","text":"Características principales"},{"depth":3,"slug":"tecnologías-y-metodología","text":"Tecnologías y metodología"},{"depth":3,"slug":"aprendizajes-y-resultados","text":"Aprendizajes y resultados"}];
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
