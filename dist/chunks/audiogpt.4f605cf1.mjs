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

				const html = updateImageReferences("<h2 id=\"audiogpt-generación-de-voz-avanzada-con-ia\">AudioGPT: Generación de voz avanzada con IA</h2>\n<p>Este proyecto combina tecnologías de procesamiento de lenguaje natural y síntesis de voz para convertir texto en audio de alta calidad con diferentes voces, acentos y estilos emocionales.</p>\n<h3 id=\"estado-en-desarrollo-próximamente-disponible\">Estado: En desarrollo (próximamente disponible)</h3>\n<h3 id=\"características-principales\">Características principales</h3>\n<ul>\n<li>Conversión de texto a voz con múltiples opciones de personalización</li>\n<li>Selección entre diferentes voces, acentos y idiomas</li>\n<li>Control de parámetros como velocidad, tono y énfasis emocional</li>\n<li>Exportación de audio en diferentes formatos y calidades</li>\n<li>Historial de generaciones para acceder fácilmente a conversiones anteriores</li>\n<li>Interfaz responsiva que funciona en dispositivos móviles y de escritorio</li>\n</ul>\n<h3 id=\"tecnologías-implementadas\">Tecnologías implementadas</h3>\n<p>El proyecto utiliza una combinación de tecnologías de vanguardia:</p>\n<ul>\n<li>APIs de modelos avanzados de lenguaje para el procesamiento de texto</li>\n<li>Algoritmos de síntesis de voz neuronal para una reproducción natural del habla</li>\n<li>Frontend desarrollado con React para una experiencia de usuario fluida</li>\n<li>Sistema de autenticación para guardar configuraciones y preferencias de usuario</li>\n<li>Optimización del rendimiento para procesar textos largos sin pérdida de calidad</li>\n</ul>\n<h3 id=\"aplicaciones-prácticas\">Aplicaciones prácticas</h3>\n<p>AudioGPT está diseñado para servir a múltiples propósitos:</p>\n<ul>\n<li>Creación de contenido para podcasts y audiolibros</li>\n<li>Asistencia para personas con discapacidad visual</li>\n<li>Herramienta educativa para aprendizaje de idiomas</li>\n<li>Desarrollo de interfaces de voz para aplicaciones y servicios</li>\n<li>Producción de voces en off para videos y presentaciones</li>\n</ul>\n<p>Este proyecto representa un avance significativo en la intersección entre la inteligencia artificial y la tecnología de audio, ofreciendo a los usuarios una herramienta versátil para generar contenido de voz de alta calidad con mínimo esfuerzo.</p>");

				const frontmatter = {"title":"AudioGPT","publishDate":"2024-03-10T00:00:00.000Z","img":"/assets/stock-2.jpg","img_alt":"AudioGPT application interface","description":"Aplicación de inteligencia artificial que convierte texto a voz con diversas opciones de personalización y control.\n","tags":["AI","Audio Generation","Web App","Speech Synthesis"]};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/audiogpt.md";
				const url = undefined;
				function rawContent() {
					return "\n## AudioGPT: Generación de voz avanzada con IA\n\nEste proyecto combina tecnologías de procesamiento de lenguaje natural y síntesis de voz para convertir texto en audio de alta calidad con diferentes voces, acentos y estilos emocionales.\n\n### Estado: En desarrollo (próximamente disponible)\n\n### Características principales\n\n- Conversión de texto a voz con múltiples opciones de personalización\n- Selección entre diferentes voces, acentos y idiomas\n- Control de parámetros como velocidad, tono y énfasis emocional\n- Exportación de audio en diferentes formatos y calidades\n- Historial de generaciones para acceder fácilmente a conversiones anteriores\n- Interfaz responsiva que funciona en dispositivos móviles y de escritorio\n\n### Tecnologías implementadas\n\nEl proyecto utiliza una combinación de tecnologías de vanguardia:\n\n- APIs de modelos avanzados de lenguaje para el procesamiento de texto\n- Algoritmos de síntesis de voz neuronal para una reproducción natural del habla\n- Frontend desarrollado con React para una experiencia de usuario fluida\n- Sistema de autenticación para guardar configuraciones y preferencias de usuario\n- Optimización del rendimiento para procesar textos largos sin pérdida de calidad\n\n### Aplicaciones prácticas\n\nAudioGPT está diseñado para servir a múltiples propósitos:\n\n- Creación de contenido para podcasts y audiolibros\n- Asistencia para personas con discapacidad visual\n- Herramienta educativa para aprendizaje de idiomas\n- Desarrollo de interfaces de voz para aplicaciones y servicios\n- Producción de voces en off para videos y presentaciones\n\nEste proyecto representa un avance significativo en la intersección entre la inteligencia artificial y la tecnología de audio, ofreciendo a los usuarios una herramienta versátil para generar contenido de voz de alta calidad con mínimo esfuerzo.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"audiogpt-generación-de-voz-avanzada-con-ia","text":"AudioGPT: Generación de voz avanzada con IA"},{"depth":3,"slug":"estado-en-desarrollo-próximamente-disponible","text":"Estado: En desarrollo (próximamente disponible)"},{"depth":3,"slug":"características-principales","text":"Características principales"},{"depth":3,"slug":"tecnologías-implementadas","text":"Tecnologías implementadas"},{"depth":3,"slug":"aplicaciones-prácticas","text":"Aplicaciones prácticas"}];
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
