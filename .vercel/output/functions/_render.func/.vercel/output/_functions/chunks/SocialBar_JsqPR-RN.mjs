import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './astro_BmwxeYug.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.fabiobiondi.dev/");
const $$SocialBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialBar;
  const socials = [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/fabiobiondi/", icon: "fa-linkedin" },
    { id: "twitter", label: "Twitter", href: "https://twitter.com/biondifabio", icon: "fa-twitter" },
    { id: "facebook", label: "Facebook", href: "xxx", icon: "fa-facebook" },
    { id: "telegram", label: "Telegram", href: "https://t.me/we_are_devs", icon: "fa-telegram" },
    { id: "whatsapp", label: "Twitch", href: "https://www.twitch.tv/fabio_biondi", icon: "fa-whatsapp" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="socialBarWrapper hidden 2xl:inline fixed top-1/2  -translate-y-1/2 -right-96 z-10 "> <div class="flex flex-col gap-5 bg-slate-900 rounded-tl-xl rounded-bl-xl p-3 w-16 justify-center items-center border border-r-0 border-slate-600" id="socialBar"> <div class="text-xs	text-slate-400 border-b border-slate-500 pb-3">SHARE</div> ${socials.map((social) => {
    return renderTemplate`<div class="social-icon"${addAttribute(social.id, "data-name")}> <div class="text-white hover:text-pink-500 transition"${addAttribute(social.label, "aria-label")}> <i${addAttribute(["fa fa-2x", social.icon], "class:list")}></i> </div> </div>`;
  })} </div> </div> `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/panels/SocialBar.astro", void 0);

export { $$SocialBar as $ };
