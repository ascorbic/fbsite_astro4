import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_ffjFK0U-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://fbsite-astro4.vercel.app/");
const prerender = false;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`HELLO SSR`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/about.astro", void 0);

const $$file = "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, prerender, $$url as url };
