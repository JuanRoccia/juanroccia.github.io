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

				const html = updateImageReferences("<h2 id=\"resumen\">Resumen</h2>\n<p>Este proyecto fue realizado como trabajo final de la carrera de Tecnologías en Programación. Consiste en el desarrollo de una estrategia de trading algorítmica utilizando técnicas de aprendizaje no supervisado (K-Means) para analizar y seleccionar activos del S&#x26;P500, optimizando portafolios y comparando su rendimiento con el índice.</p>\n<h3 id=\"objetivos\">Objetivos</h3>\n<ul>\n<li>Descargar y procesar datos históricos de precios del S&#x26;P500.</li>\n<li>Calcular indicadores técnicos y características relevantes para cada acción.</li>\n<li>Seleccionar los 150 activos más líquidos cada mes.</li>\n<li>Calcular rentabilidades mensuales para distintos horizontes temporales.</li>\n<li>Descargar factores Fama-French y calcular betas móviles.</li>\n<li>Agrupar activos similares usando K-Means y construir portafolios óptimos (max Sharpe ratio).</li>\n<li>Comparar el rendimiento del portafolio con el S&#x26;P500.</li>\n</ul>\n<h3 id=\"tecnologías-y-librerías-utilizadas\">Tecnologías y librerías utilizadas</h3>\n<ul>\n<li>Python (Pandas, Numpy, Matplotlib, yfinance, sklearn, PyPortfolioOpt, pandas_ta, statsmodels, pandas_datareader)</li>\n<li>Jupyter Notebook</li>\n</ul>\n<h2 id=\"metodología\">Metodología</h2>\n<ol>\n<li><strong>Descarga y limpieza de datos:</strong> Se obtuvieron los precios históricos de las acciones del S&#x26;P500 y se calcularon indicadores técnicos como volatilidad, RSI, bandas de Bollinger, ATR, MACD y volumen en dólares.</li>\n<li><strong>Filtrado de liquidez:</strong> Se seleccionaron los 150 activos más líquidos por mes para asegurar operatividad realista.</li>\n<li><strong>Cálculo de rentabilidades:</strong> Se calcularon retornos mensuales para distintos horizontes temporales, controlando valores atípicos.</li>\n<li><strong>Factores de riesgo:</strong> Se descargaron los factores Fama-French y se calcularon betas móviles para cada activo.</li>\n<li><strong>Clustering y optimización:</strong> Se aplicó K-Means para agrupar activos y se construyeron portafolios óptimos usando la frontera eficiente (max Sharpe ratio).</li>\n<li><strong>Comparación de resultados:</strong> Se comparó el rendimiento del portafolio con el índice S&#x26;P500.</li>\n</ol>\n<h2 id=\"resultados\">Resultados</h2>\n<p><img src=\"/assets/newplot.png\" alt=\"Gráfica de resultados\"></p>\n<p>El portafolio optimizado logró resultados competitivos frente al S&#x26;P500, mostrando la utilidad de combinar técnicas de Machine Learning con análisis financiero tradicional.</p>\n<h2 id=\"acceso-al-notebook-completo\">Acceso al notebook completo</h2>\n<p><a href=\"/assets/Proyecto_Final_ML&#x26;BD.ipynb\">Descargar notebook (Jupyter)</a></p>\n<hr>\n<blockquote>\n<p>Proyecto realizado en 2025 para la Tecnicatura en Programación, orientado a la aplicación práctica de Machine Learning y Big Data en finanzas.</p>\n</blockquote>");

				const frontmatter = {"title":"Estrategia de Trading Algorítmica con Machine Learning sobre el S&P500","date":"2025-07-14T00:00:00.000Z","description":"Proyecto final de la Tecnicatura en Programación: análisis y optimización de portafolios usando clustering y datos históricos del S&P500.","image":"/assets/newplot.png","notebook":"/assets/Proyecto_Final_ML&BD.ipynb"};
				const file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/content/work/trading-ml-sp500.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Resumen\r\n\r\nEste proyecto fue realizado como trabajo final de la carrera de Tecnologías en Programación. Consiste en el desarrollo de una estrategia de trading algorítmica utilizando técnicas de aprendizaje no supervisado (K-Means) para analizar y seleccionar activos del S&P500, optimizando portafolios y comparando su rendimiento con el índice.\r\n\r\n### Objetivos\r\n- Descargar y procesar datos históricos de precios del S&P500.\r\n- Calcular indicadores técnicos y características relevantes para cada acción.\r\n- Seleccionar los 150 activos más líquidos cada mes.\r\n- Calcular rentabilidades mensuales para distintos horizontes temporales.\r\n- Descargar factores Fama-French y calcular betas móviles.\r\n- Agrupar activos similares usando K-Means y construir portafolios óptimos (max Sharpe ratio).\r\n- Comparar el rendimiento del portafolio con el S&P500.\r\n\r\n### Tecnologías y librerías utilizadas\r\n- Python (Pandas, Numpy, Matplotlib, yfinance, sklearn, PyPortfolioOpt, pandas_ta, statsmodels, pandas_datareader)\r\n- Jupyter Notebook\r\n\r\n## Metodología\r\n\r\n1. **Descarga y limpieza de datos:** Se obtuvieron los precios históricos de las acciones del S&P500 y se calcularon indicadores técnicos como volatilidad, RSI, bandas de Bollinger, ATR, MACD y volumen en dólares.\r\n2. **Filtrado de liquidez:** Se seleccionaron los 150 activos más líquidos por mes para asegurar operatividad realista.\r\n3. **Cálculo de rentabilidades:** Se calcularon retornos mensuales para distintos horizontes temporales, controlando valores atípicos.\r\n4. **Factores de riesgo:** Se descargaron los factores Fama-French y se calcularon betas móviles para cada activo.\r\n5. **Clustering y optimización:** Se aplicó K-Means para agrupar activos y se construyeron portafolios óptimos usando la frontera eficiente (max Sharpe ratio).\r\n6. **Comparación de resultados:** Se comparó el rendimiento del portafolio con el índice S&P500.\r\n\r\n## Resultados\r\n\r\n![Gráfica de resultados](/assets/newplot.png)\r\n\r\nEl portafolio optimizado logró resultados competitivos frente al S&P500, mostrando la utilidad de combinar técnicas de Machine Learning con análisis financiero tradicional.\r\n\r\n## Acceso al notebook completo\r\n\r\n[Descargar notebook (Jupyter)](/assets/Proyecto_Final_ML&BD.ipynb)\r\n\r\n---\r\n\r\n> Proyecto realizado en 2025 para la Tecnicatura en Programación, orientado a la aplicación práctica de Machine Learning y Big Data en finanzas.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"resumen","text":"Resumen"},{"depth":3,"slug":"objetivos","text":"Objetivos"},{"depth":3,"slug":"tecnologías-y-librerías-utilizadas","text":"Tecnologías y librerías utilizadas"},{"depth":2,"slug":"metodología","text":"Metodología"},{"depth":2,"slug":"resultados","text":"Resultados"},{"depth":2,"slug":"acceso-al-notebook-completo","text":"Acceso al notebook completo"}];
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
