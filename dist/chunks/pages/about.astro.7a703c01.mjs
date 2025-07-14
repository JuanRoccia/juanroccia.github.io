import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d584cb1b.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.4f203fa9.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.15196aca.mjs';
/* empty css                           */import '@astrojs/internal-helpers/path';
import 'html-escaper';
/* empty css                         *//* empty css                                   *//* empty css                         *//* empty css                                   *//* empty css                                   *//* empty css                               */
const $$Astro = createAstro("https://juanroccia.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Juan Roccia", "description": "About Juan Roccia - Developer, AI Specialist, and Automation Engineer", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<div class="stack gap-20 astro-KH7BTL4R">
		<main class="wrapper about astro-KH7BTL4R">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
				<img width="1553" height="873" src="/assets/at-work.jpg" alt="Juan Roccia at work with a colleague" class="astro-KH7BTL4R">
			` })}

			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Background</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">
						I'm a versatile professional in the tech industry with expertise across web development, automation systems, 
						and artificial intelligence. My passion for technology drives me to continually explore emerging fields and
						apply cutting-edge solutions to practical problems.
					</p>
					<p class="astro-KH7BTL4R">
						With a foundation in web development, I've expanded my skill set to embrace modern technologies that are
						transforming our digital landscape. I specialize in creating efficient, scalable systems that leverage the 
						power of automation and AI to deliver exceptional value.
					</p>
					<p class="astro-KH7BTL4R">
						I take pride in my ability to bridge the gap between technical complexity and practical application, 
						making advanced technologies accessible and beneficial for businesses and individuals alike.
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Education</h2>
				<div class="content astro-KH7BTL4R">
					<h3 class="astro-KH7BTL4R">Formal Education</h3>
					<ul class="astro-KH7BTL4R">
						<li class="astro-KH7BTL4R">Tecnicatura Universitaria en Tecnologías de Programación - UPSO</li>
						<li class="astro-KH7BTL4R">Harvard CS50's Introduction to Computer Science</li>
					</ul>
					<p class="astro-KH7BTL4R">
						My formal education has provided me with a solid foundation in computer science principles and
						software development methodologies, which I continually enhance through self-directed learning
						and professional development.
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Skills</h2>
				<div class="content astro-KH7BTL4R">
					<h3 class="astro-KH7BTL4R">Web Development</h3>
					<p class="astro-KH7BTL4R">
						Expert in HTML, CSS, JavaScript, PHP, and modern frameworks like React, Astro, and 
						server-side technologies. I create responsive, accessible, and performant websites 
						with clean, maintainable code.
					</p>
					
					<h3 class="astro-KH7BTL4R">Automation Systems</h3>
					<p class="astro-KH7BTL4R">
						Specialized in designing and implementing automation solutions that streamline 
						workflows and increase productivity. My expertise includes process automation, 
						scripting, and integration of disparate systems to create cohesive, efficient
						operational environments.
					</p>
					
					<h3 class="astro-KH7BTL4R">Artificial Intelligence & Machine Learning</h3>
					<p class="astro-KH7BTL4R">
						Proficient in developing AI solutions for content generation, data analysis, and 
						predictive modeling. I work with various machine learning libraries and frameworks
						to create intelligent systems that can learn from data and make informed decisions.
					</p>
					
					<h3 class="astro-KH7BTL4R">Algorithmic Trading</h3>
					<p class="astro-KH7BTL4R">
						Currently developing trading algorithms that leverage statistical analysis and
						machine learning to identify market opportunities. This ongoing project combines
						my interests in finance, mathematics, and programming to create data-driven
						trading strategies.
					</p>
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
	</div>
` })}`;
}, "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/about.astro", void 0);

const $$file = "C:/Users/juanm/OneDrive/Escritorio/Desarrollo Web 3.0/juanroccia.github.io/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
