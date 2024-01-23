/* empty css                          */
import { jsx } from 'react/jsx-runtime';
import 'react';
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderSlot, j as renderComponent, u as unescapeHTML, k as renderHead } from '../astro_BmwxeYug.mjs';
import 'kleur/colors';
import clsx from 'clsx';
/* empty css                          */
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_7cP59SVn.mjs';
/* empty css                          */
/* empty css                          */
/* empty css                          */

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_7cP59SVn.mjs'
    ).then(n => n.g).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$G = createAstro("https://www.fabiobiondi.dev/");
const $$Image$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Image$1;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro/components/Image.astro", void 0);

const $$Astro$F = createAstro("https://www.fabiobiondi.dev/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$E = createAstro("https://www.fabiobiondi.dev/");
const $$DesktopWindow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$DesktopWindow;
  const { center = false, isLight = false, isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mockup-window border !my-12 border-slate-700 dark:border-base-700 "> <div${addAttribute([
    "flex justify-center px-4 py-8 border-t border-slate-700 dark:border-base-700 ",
    { "bg-slate-100": isLight, "bg-slate-900": isDark }
  ], "class:list")}> <div${addAttribute(["flex flex-col gap-4 w-full", {
    "items-center": center
  }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/DesktopWindow.astro", void 0);

const $$Astro$D = createAstro("https://www.fabiobiondi.dev/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Image;
  const { src, alt = "", w = void 0, quality = 80, border, align = "center", isWindowed = true } = Astro2.props;
  return renderTemplate`${isWindowed ? renderTemplate`${renderComponent($$result, "DesktopWindow", $$DesktopWindow, { "isDark": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div${addAttribute([" my-3    ", {
    "w-full": true
  }], "class:list")}><div${addAttribute(["flex w-full", {
    "p-1 sm:p-6 ": border,
    "justify-left": align === "start",
    "justify-center": align === "center",
    "justify-end": align === "end"
  }], "class:list")}><div class="relative"><div class="z-20 relative">${renderComponent($$result2, "Image", $$Image$1, { "class": "rounded-sm sm:rounded-2xl", "src": src, "quality": 80, "alt": alt, "width": w })}</div><div class="z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div></div></div></div>` })}` : renderTemplate`<div${addAttribute(["flex w-full", {
    "p-0 sm:p-6 ": border,
    "justify-left": align === "start",
    "justify-center": align === "center",
    "justify-end": align === "end"
  }], "class:list")}>${renderComponent($$result, "Image", $$Image$1, { "class": "rounded-sm sm:rounded-2xl", "src": src, "quality": 80, "alt": alt, "width": w })}</div>`}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Image.astro", void 0);

const $$Astro$C = createAstro("https://www.fabiobiondi.dev/");
const $$ImageCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$ImageCarousel;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel w-full"> ${items.map((item, i) => renderTemplate`<div${addAttribute(`item${i + 1}`, "id")} class="carousel-item w-full"> <img${addAttribute(item, "src")} class="w-full"> </div>`)} </div> <div class="flex justify-center w-full py-2 gap-2"> ${items.map((item, i) => renderTemplate`<a${addAttribute(`#item${i + 1}`, "href")} class="btn btn-xs">${i + 1}</a>`)} </div> <!--
<div class="carousel w-full">

  <div id="item1" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>

 -->`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/ImageCarousel.astro", void 0);

const $$Astro$B = createAstro("https://www.fabiobiondi.dev/");
const $$HDivider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$HDivider;
  const { primary, secondary, accent, hideOnMobile } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(
    ["divider !sm:mx-32 sm:px-32 sm:mt-12 ", {
      ["invisible sm:visible"]: hideOnMobile,
      ["text-black before:bg-black after:bg-black dark:text-slate-200 dark:before:!bg-slate-200 dark:after:bg-slate-200"]: primary,
      ["text-slate-500 before:!bg-slate-500 after:bg-slate-500"]: secondary,
      ["text-pink-500 before:!bg-pink-500 after:bg-pink-500"]: accent
    }],
    "class:list"
  )}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/HDivider.astro", void 0);

const $$Astro$A = createAstro("https://www.fabiobiondi.dev/");
const $$IFrame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$IFrame;
  const { src, noMargins = false, vimeo = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "bg-slate-700 p-3 rounded-2xl my-3",
    { "mx-0": noMargins },
    { "mx-3": !noMargins }
  ], "class:list")}> ${vimeo ? renderTemplate`<iframe width="100%" class="aspect-video bg-black"${addAttribute(src, "src")} title="External Content" allowfullscreen loading="lazy"></iframe>` : renderTemplate`<iframe width="100%" class="h-96 sm:h-full sm:aspect-video"${addAttribute(src, "src")} title="External Content" allowfullscreen loading="lazy"></iframe>`} </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/IFrame.astro", void 0);

const $$Astro$z = createAstro("https://www.fabiobiondi.dev/");
const $$Key = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Key;
  const { size = "md" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<kbd${addAttribute(["kbd mx-1 ", {
    "kbd-xs": size === "xs",
    "kbd-sm": size === "sm",
    "kbd-md": size === "md",
    "kbd-lg": size === "lg"
  }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </kbd> `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Key.astro", void 0);

const $$Astro$y = createAstro("https://www.fabiobiondi.dev/");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Code;
  const { title, techs } = Astro2.props;
  const TECHS = {
    "js": { img: import('../js_VAXMi86h.mjs'), longName: "JavaScript" },
    "ts": { img: import('../ts_vRVZRdqA.mjs'), longName: "TypeScript" },
    "angular": { img: import('../angular_7d3O9_Pl.mjs'), longName: "Angular" },
    "react": { img: import('../react_dnDZLVi3.mjs'), longName: "React" },
    "html": { img: import('../html_ogbpLYYF.mjs'), longName: "HTML" },
    "css": { img: import('../css_K1xDyVl4.mjs'), longName: "CSS" },
    "qwik": { img: import('../qwik_i-0HEoYK.mjs'), longName: "Qwik" },
    "next": { img: import('../next_hkkj-oOn.mjs'), longName: "Next" },
    "astro": { img: import('../astro_vyDVVwQ6.mjs'), longName: "Astro" }
  };
  const hasHeaderContent = title || techs;
  return renderTemplate`<!-- <div class="mt-4 mb-12 relative">
  <div class="mockup-code !rounded-b-none " style="background-color: #0d1117"></div>
  <div  style="background-color: #0d1117">
    <div class="px-5">
      <slot />
    </div>
  </div>
  <div class="p-4 rounded-b-2xl  shadow-slate-900 shadow-md "  style="background-color: #0d1117"></div>
</div> -->${maybeRenderHead()}<div class="relative border-2 border-slate-700 rounded-2xl mt-4 mb-12"> ${hasHeaderContent && renderTemplate`<div class="flex items-center gap-1 px-3 py-1 h-12"> ${techs?.length && techs.map((tech) => {
    return renderTemplate`${renderComponent($$result, "Image", $$Image$1, { "src": TECHS[tech].img, "quality": 80, "alt": TECHS[tech].longName, "width": 24 })}`;
  })} ${title && renderTemplate`<div class="ml-2">${unescapeHTML(title)}</div>`} </div>`} <div${addAttribute(["px-3 lg:px-5 py-6 rounded-b-xl", { "rounded-t-xl": !hasHeaderContent }], "class:list")} style="background-color: #0d1117"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Code.astro", void 0);

const $$Astro$x = createAstro("https://www.fabiobiondi.dev/");
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Phone;
  const { isTrasparent = false, isPadding = false, isLight = false, isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center my-6"> <div${addAttribute(["mockup-phone", { "bg-transparent": isTrasparent }], "class:list")}> <div${addAttribute(["camera", { "hidden": isTrasparent }], "class:list")}></div> <div class="display"> <div${addAttribute([
    "artboard artboard-demo phone-1  ",
    { "bg-slate-100": isLight, "bg-slate-900 text-white": isDark, "bg-transparent": isTrasparent, "p-3": isPadding }
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Phone.astro", void 0);

const $$Astro$w = createAstro("https://www.fabiobiondi.dev/");
const COLORS = {
  [1]: "green",
  [2]: "lightgreen",
  [3]: "orange",
  [4]: "orangered",
  [5]: "red"
};
const $$Difficulty = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Difficulty;
  const { value } = Astro2.props;
  const backgroundColor = COLORS[value];
  const percWidth = value * 2 * 10;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-32"> <div${addAttribute({ backgroundColor, width: `${percWidth}%` }, "style")} class=" rounded-full  h-4 absolute top-0 left-0 z-10"></div> <div class="border border-slate-900 bg-slate-700 rounded-full h-4 w-full absolute top-0 left-0"></div> </div> <!-- 
<span class="flex gap-2 flex-wrap">
  <div>
  {
    [1,2,3,4,5].map((item, i) => 
      <i  class:list={['fa text-normal', {
        'fa-star': (i+1) <= value, 
        'fa-star-o': (i+1) > value
      }]}></i>)
  }
  </div>
</span> -->`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Difficulty.astro", void 0);

const $$Astro$v = createAstro("https://www.fabiobiondi.dev/");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, center, white } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(
    [
      "flex gap-2 flex-wrap my-2",
      {
        "justify-center": center,
        "text-black dark:text-white": !white,
        "text-white": white
      }
    ],
    "class:list"
  )}> <!-- {
    tags.map((tag: string) => 
      <div class=" badge badge-outline px-4 p-2 md:badge-lg badge-sm md:py-4 md:px-8 no-underline">
        #{tag}
      </div>
      // <a 
      //   class="badge badge-outline px-4 p-2 md:badge-lg badge-sm md:py-4 md:px-8 no-underline"
      //   href={\`/tags/\${tag}\`}
      // >
      //   #{tag}
      // </a>
    ) 
  }--> ${tags.map(
    (tag) => renderTemplate`<div class="bg-slate-500 dark:bg-slate-700  text-white rounded-2xl px-2 py-1 shadow-lg  md:px-4 no-underline"> ${tag} </div>`
    // <a 
    //   class="badge badge-outline px-4 p-2 md:badge-lg badge-sm md:py-4 md:px-8 no-underline"
    //   href={`/tags/${tag}`}
    // >
    //   #{tag}
    // </a>
  )} </span>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Tags.astro", void 0);

const $$Astro$u = createAstro("https://www.fabiobiondi.dev/");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Stats;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-3xl  bg-slate-900 text-primary-content mt-12 rounded-2xl p-4 text-lg"> <div class="flex flex-col sm:flex-row gap-2 sm:gap-8 "> <div class="w-full lg:w-1/2 flex flex-col gap-3 text-center"> <div class="text-slate-400">${frontmatter.pubDate.slice(0, 10)}</div> <div class="text-white text-3xl font-bold">${`${frontmatter.minutesTotal + 2} min read`}</div> <div class=""> ${frontmatter.author?.map((author) => {
    return renderTemplate`<a${addAttribute(author === "Fabio Biondi" ? "/about" : `/collaborators/author`, "href")}> <button class="btn btn-sm bg-sky-500 text-white">${author}</button> </a>`;
  })} </div> </div> <div class="w-full lg:w-1/2 flex flex-col gap-0 sm:gap-3 text-center"> <div class="flex sm:flex-col justify-center items-center gap-3"> <div class="text-slate-400">Difficulty</div> <div class="text-3xl flex justify-center my-3 pb-4 sm:py-0"> ${renderComponent($$result, "Difficulty", $$Difficulty, { "value": frontmatter.difficulty })} </div> </div> <div class="flex justify-center"> ${renderComponent($$result, "Tags", $$Tags, { "tags": frontmatter.tags })} </div> </div> </div> </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Stats.astro", void 0);

const $$Astro$t = createAstro("https://www.fabiobiondi.dev/");
const $$PostHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$PostHero;
  const { frontmatter, imageBlur, imageUrl, showSeriesPanel = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between items-center mt-12 relative"> ${imageBlur && renderTemplate`<div class="absolute top-10 blurFix blur-3xl w-full h-full opacity-10 pointer-events-none"> ${renderComponent($$result, "Image", $$Image$1, { "class": "w-full rounded-3xl", "fit": "cover", "width": 400, "quality": 10, "aspectRatio": 4 / 2, "src": imageBlur, "alt": frontmatter.image.alt || "blurred image" })} </div>`} <div class="w-full lg:w-2/3 order-none lg:order-first text-center themetxt lg:text-start"> <h2 class="m-0 text-4xl lg:text-6xl 3xl:text-8xl font-extrabold themetxt">${unescapeHTML(frontmatter.title1)}</h2> <h2 class="m-0 my-3 text-3xl lg:text-4xl 3xl:text-6xl font-thin themetxt">${unescapeHTML(frontmatter.title2)}</h2> <p class="m-0 mt-3 text-normal sm:text-xl themetxt">${unescapeHTML(frontmatter.description)}</p> <!-- STATS --> <div class="flex justify-center lg:justify-start"> ${renderComponent($$result, "Stats", $$Stats, { "frontmatter": frontmatter })} </div> </div> <div class="w-full lg:w-1/3 flex justify-center lg:justify-end order-first lg:order-none"> ${imageUrl && renderTemplate`${renderComponent($$result, "Image", $$Image$1, { "class": "rounded-xl", "src": imageUrl, "alt": frontmatter.image.alt, "width": 300, "quality": 50, "fit": "outside", "aspectRatio": 1 })}`} </div> </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/PostHero.astro", void 0);

function getAllPosts(posts, showDraft = false) {
  return posts.filter((p) => {
    if (!showDraft && p.frontmatter.draft) {
      return false;
    }
    return !p.frontmatter.draft;
  }).sort(function(a, b) {
    const c = new Date(a.frontmatter.pubDate);
    const d = new Date(b.frontmatter.pubDate);
    return d - c;
  });
}

const $$Astro$s = createAstro("https://www.fabiobiondi.dev/");
const $$PostSeries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$PostSeries;
  const { frontmatter, primary = true, secondary, accent } = Astro2.props;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/blog/2022-09/create-a-react-typescript-generic-component/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.i),"../../pages/blog/2022-09/esbuild-and-react-hello-world/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.b),"../../pages/blog/2022-09/how-to-write-react-uikit-components-in-typescript-that-extends-native-elements/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.c),"../../pages/blog/2022-09/react-antd-and-tailwind-fix-css-conflicts/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.d),"../../pages/blog/2023-01/how-to-safely-type-usereducer-in-react-and-typescript/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.e),"../../pages/blog/2023-01/ngrx-15-createAction-group-and-create-feature/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.f),"../../pages/blog/2023-01/react-from-usestate-to-usereducer/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.g),"../../pages/blog/2023-08/quick-intro-to-next13/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.h),"../../pages/blog/2023-08/qwik-create-and-deploy-a-project-in-vercel/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.j),"../../pages/blog/2023-08/qwik-debounce-custom-hook/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.k),"../../pages/blog/2023-08/qwik-fetch-data-with-routerloader/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.l),"../../pages/blog/_2022-11/astro-uikit/index.mdx": () => import('../index_8YlcTf4c.mjs'),"../../pages/blog/_2022-11/post-5/index.mdx": () => import('../index_lE1YoYP6.mjs'),"../../pages/tutorials/angular/angular-basics/1-angular-hello-world.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n._),"../../pages/tutorials/angular/angular-ng-modules-and-router/1-create-the-project.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.m),"../../pages/tutorials/angular/angular-ng-modules-and-router/2-core-module-and-navbar.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.n),"../../pages/tutorials/angular/angular-ng-modules-and-router/3-features-modules-router-and-lazy-loading.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.o),"../../pages/tutorials/angular/angular-ng-modules-and-router/4-nested-routes.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.p),"../../pages/tutorials/angular/angular-standalone-apps/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.q),"../../pages/tutorials/angular/simple-crud-in-angular/1-create-an-angular-project.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.r),"../../pages/tutorials/angular/simple-crud-in-angular/2-display-list.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.s),"../../pages/tutorials/angular/simple-crud-in-angular/3-template-driven-forms.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.t),"../../pages/tutorials/angular/simple-crud-in-angular/4-http-client-and-rest-api.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.u),"../../pages/tutorials/angular/simple-crud-in-angular/5-angular-dependency-injection.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.v),"../../pages/tutorials/angular/simple-crud-in-angular/6-error-handling.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.w),"../../pages/tutorials/angular/simple-crud-in-angular/7-challenges.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.x),"../../pages/tutorials/javascript/js-for-frontend-developers/1-introduction.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.y),"../../pages/tutorials/react/vite-and-vitest/1-react-vite-and-typescript.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.z),"../../pages/tutorials/react/vite-and-vitest/2-react-vitest-and-typescript.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.A),"../../pages/tutorials/react/vite-and-vitest/3-react-vitest-testing-library-test-react-components.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.B),"../../pages/tutorials/react/vite-and-vitest/4-vitest-ui.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.C),"../../pages/tutorials/react/vite-and-vitest/5-vistest-code-coverage.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.D),"../../pages/video-courses/angular-evolution/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.S),"../../pages/video-courses/angular-fundamentals/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.T),"../../pages/video-courses/angular-reactive-forms/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.U),"../../pages/video-courses/git-fundamentals/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.V),"../../pages/video-courses/next-fundamentals/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.W),"../../pages/video-courses/ngrx/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.X),"../../pages/video-courses/react-pro-real-world-applications/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.Y),"../../pages/video-courses/rxjs/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.Z),"../../pages/video-courses/scrivere-e2e-test-con-cypress/index.mdx": () => import('../prerender_Uc5IHdC7.mjs').then(n => n.a0)}), () => "../../pages/**/*.{md,mdx}");
  const series = getAllPosts(allPosts).filter((p) => p.frontmatter?.series?.name === frontmatter.series?.name);
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center relative"> ${series.length > 1 && renderTemplate`<div class="my-12 md:my-24 relative overflow-hidden"> <div class="absolute font-bold bg-sky-700 text-white -rotate-[24deg] p-1 w-96 -left-28 top-6 text-center">
RELATED POSTS
</div> <div${addAttribute([
    "p-6 m-0 rounded-box",
    { "bg-slate-900": primary },
    { "bg-slate-600": secondary },
    { "bg-pink-600": accent }
  ], "class:list")}> <div class="flex flex-col gap-2 text-center my-8">  <span class="text-white text-3xl font-extrabold pb-3 pt-0">${frontmatter?.series?.name}</span> </div> <div> ${series.map((s) => {
    const isCurrentPage = s.frontmatter.slug === frontmatter.slug;
    return isCurrentPage ? null : renderTemplate`<div class="mb-2 text-white"> <!-- {
                      isCurrentPage ? <i class="fa fa-hand-o-right mx-2"/> : <span class="text-xl">•</span>
                    }--> <a${addAttribute(`/blog/` + s.frontmatter.slug, "href")}${addAttribute(["", { "bg-slate-500 px-3 py-1 rounded-lg pointer-events-none": isCurrentPage }], "class:list")}> <span class="not-italic text-white text-xl hover:text-sky-500">${s.frontmatter.title} </span> </a> </div>`;
  })} </div> </div> <div></div> </div>`} </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/PostSeries.astro", void 0);

const $$Astro$r = createAstro("https://www.fabiobiondi.dev/");
const $$Hint = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Hint;
  const { img, title, type = "tip" } = Astro2.props;
  const thumbImb = {
    "tip": import('../emote-opla_right_rujdHdD2.mjs'),
    "alert": import('../emote-opla_right_rujdHdD2.mjs'),
    "info": import('../emote-opla_right_rujdHdD2.mjs'),
    "empty": import('../emote-opla_right_rujdHdD2.mjs')
    // 'alert': '/images/brand/emote-desk.png',
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "hint rounded-xl p-5 text-black px-10 xl:px-16 relative mt-20 mb-24",
    { "bg-slate-50": type === "tip" },
    { "bg-none border-2 border-slate-700 text-black dark:text-white": type === "info" },
    { "bg-none border-2 border-red-400 text-black dark:text-white": type === "alert" },
    { "bg-none border-2 border-slate-700 text-black dark:text-white": type === "empty" }
  ], "class:list")}> ${title && renderTemplate`<h1 class="text-xl xl:text-2xl font-extrabold mb-4">${title}</h1>`} <div> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Image", $$Image$1, { "class": "absolute -left-5 -top-4 xl:-left-14 xl:-top-10 w-16 xl:w-28", "src": img || thumbImb[type], "alt": "", "width": 120, "quality": 50, "fit": "outside", "aspectRatio": 1 })} </div> `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Hint.astro", void 0);

function StackBlitz2(props) {
  const { url, clickToLoad = true } = props;
  const finalUrl = clickToLoad ? `${url}&ctl=1` : url;
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-700 p-3 m-3 rounded-2xl", children: /* @__PURE__ */ jsx(
    "iframe",
    {
      width: "100%",
      className: "h-96 sm:h-full sm:aspect-video",
      src: finalUrl,
      title: "Code Playground"
    }
  ) });
}
const StackBlitz = StackBlitz2;

const $$Astro$q = createAstro("https://www.fabiobiondi.dev/");
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { data } = Astro2.props;
  return renderTemplate`... ${data.name}}
${maybeRenderHead()}<figure class="max-w-screen-md mx-auto text-center"> <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14"> <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"></path> </svg> <div> <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p> </div> <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse"> <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700"> <cite class="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite> <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite> </div> </figcaption> </figure>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Testimonial.astro", void 0);

const $$Astro$p = createAstro("https://www.fabiobiondi.dev/");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container my-24 mx-auto md:px-6" id="testimonials"> <section class="mb-32 text-center"> <div class="mb-6"> <h2 class=" text-3xl font-bold">Recensioni</h2> <div>Alcune delle recensioni dei primi studenti del corso... </div> </div> <div class="grid gap-x-6  md:grid-cols-3 lg:gap-x-12"> ${data.map((user) => {
    const vote = user.rate / 2;
    return renderTemplate`<div class="px-3 mb-12 md:mb-0 border-b border-dashed border-slate-500"> <div class="my-6 flex justify-center items-center"> <!--<img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                     class="w-32 rounded-full shadow-lg dark:shadow-black/20" />--> <div class="h-32 flex items-center"> ${renderComponent($$result, "W.Img", $$Image, { "isWindowed": false, "src": user.img, "w": 100, "quality": 60, "border": true })} </div> </div> <div class="mb-0 flex justify-center mt-6"> ${renderComponent($$result, "W.StarsDecimal", $$StarsDecimal, { "value": vote })} </div> <h5 class="my-2 text-lg font-bold text-black dark:text-white"> <!--ICON WITH LINK--> ${renderComponent($$result, "IconLink", $$IconLink, { "icon": user.icon, "link": user.link })} ${user.name} </h5> <h6 class="mb-4 font-xs text-black dark:text-slate-300 italic"> ${user.job} </h6> <div class="font-xs pb-3">${user.review}</div> </div>`;
  })} </div> </section> </div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Testimonials.astro", void 0);

const $$Astro$o = createAstro("https://www.fabiobiondi.dev/");
const $$Notes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Notes;
  return renderTemplate``;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Notes.astro", void 0);

const $$Astro$n = createAstro("https://www.fabiobiondi.dev/");
const $$IconLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$IconLink;
  const { icon, link } = Astro2.props;
  return renderTemplate`<!--ICON WITH LINK-->${link && renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank"><i${addAttribute(clsx(
    "fa mr-2 text-sky-500",
    {
      "fa-github": icon === "github",
      "fa-linkedin": icon === "linkedin",
      "fa-link": icon === "link" || !icon
    }
  ), "class")}></i></a>`}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/IconLink.astro", void 0);

const $$Astro$m = createAstro("https://www.fabiobiondi.dev/");
const $$Separator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Separator;
  const { size = "sm", primary, secondary, accent, hideOnMobile } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(
    ["", {
      "my-4": size === "sm",
      "my-8": size === "md",
      "my-16": size === "lg",
      "my-24": size === "xl"
    }],
    "class:list"
  )}></div>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Separator.astro", void 0);

const $$Astro$l = createAstro("https://www.fabiobiondi.dev/");
const $$StarsDecimal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$StarsDecimal;
  const { value } = Astro2.props;
  const integer = Math.floor(value);
  const areDecimals = value !== integer;
  const stars = new Array(integer).fill(null);
  return renderTemplate`${stars.map((star) => {
    return renderTemplate`${maybeRenderHead()}<i class="fa fa-star fa-2x text-yellow-200"></i>`;
  })}${areDecimals && renderTemplate`<i class="fa fa-star-half-o  fa-2x text-yellow-200"></i>`}<!--<i class="fa fa-star"></i>
  <i class="fa fa-star-half-o"></i>
  <i class="fa fa-star-o"></i>-->`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/StarsDecimal.astro", void 0);

const $$Astro$k = createAstro("https://www.fabiobiondi.dev/");
const $$Toggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Toggle;
  const { title, text, titleClass = "text-xl", bg = true, badgeColor = "bg-slate-900" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details${addAttribute([{ "mb-8": bg }], "class:list")} data-astro-cid-nnilz33g> <summary${addAttribute([{ "py-3 bg-slate-700": bg }, titleClass], "class:list")} data-astro-cid-nnilz33g> <div class="flex justify-between " data-astro-cid-nnilz33g> <div${addAttribute([
    "text-sm lg:text-lg 3xl:text-2xl font-bold",
    // {'dark:text-white': !bg},
    { "text-white": bg }
  ], "class:list")} data-astro-cid-nnilz33g>${title}</div> <div data-astro-cid-nnilz33g> ${text && renderTemplate`<div${addAttribute(`${badgeColor} text-sm lg:text-lg 3xl:text-2xl border-none  text-white py-1 px-3 rounded-2xl invisible md:visible`, "class")} data-astro-cid-nnilz33g> ${text} </div>`} </div> </div> </summary> <div class="content" data-astro-cid-nnilz33g> ${renderSlot($$result, $$slots["default"])} </div> </details>  `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Toggle.astro", void 0);

const $$Astro$j = createAstro("https://www.fabiobiondi.dev/");
const $$PixelFacebook = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$PixelFacebook;
  Astro2.props;
  return renderTemplate`<!-- Meta Pixel Code --> ${maybeRenderHead()}<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1391646005060271&ev=PageView&noscript=1"></noscript><!-- End Meta Pixel Code -->`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/PixelFacebook.astro", void 0);

const $$Astro$i = createAstro("https://www.fabiobiondi.dev/");
const $$Paragraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { center, title, mt = "lg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="paragraph " data-astro-cid-kpqbyg4j> <div${addAttribute([
    `text-lg leading-6 md:text-xl md:leading-7 lg:text-2xl lg:leading-10`,
    {
      "mt-0": mt === "none",
      "mt-4": mt === "sm",
      "mt-8": mt === "md",
      "mt-16": mt === "lg"
    }
  ], "class:list")} data-astro-cid-kpqbyg4j> ${title && renderTemplate`<h1${addAttribute([{ "text-center": center }], "class:list")} data-astro-cid-kpqbyg4j>${unescapeHTML(title)}</h1>`} <div${addAttribute([{ "text-center": center }], "class:list")} data-astro-cid-kpqbyg4j> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/Paragraph.astro", void 0);

const $$Astro$h = createAstro("https://www.fabiobiondi.dev/");
const $$YTModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$YTModal;
  return renderTemplate`${maybeRenderHead()}<div id="iframe_youtube_wrapper" class=" fixed top-0 bottom-0 left-0 right-0 z-50  text-white  flex justify-center align-middle items-center mx-auto " style="visibility: hidden; backdrop-filter: blur(10px); background-color: rgba(0,0,0,0.5)" data-astro-cid-22xs7k66> <iframe id="iframe_youtube" style="background: #000; color-scheme: normal" class=" aspect-video bg-black" allowfullscreen allowtransparency="false" loading="lazy" data-astro-cid-22xs7k66></iframe> <!--  class=" aspect-video portrait:w-full landscape:md:h-[640px]  " --> <!-- CLose buttons --> <div class="fixed top-1 right-1 md:top-3 md:right-3 closeYouTubeModalX cursor-pointer" data-astro-cid-22xs7k66> <i class="fa fa-times fa-3x" data-astro-cid-22xs7k66></i> </div> <div class="fixed -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 closeYouTubeModalBottomButton" style="z-index: 100000000" data-astro-cid-22xs7k66> <button class="button !rounded-b-none closeYouTubeModal" data-astro-cid-22xs7k66>CLOSE</button> </div> </div>    <!-- When user scroll to this point the ScrollToArrow is shown --> <!-- <div id="showArrowScrollTrigger"></div> --> <!-- <div class="border-t border-slate-700 block md:hidden"></div> -->`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/YT_Modal.astro", void 0);

const $$Astro$g = createAstro("https://www.fabiobiondi.dev/");
const $$YTTrigger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$YTTrigger;
  const { id, class: classNames } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "data-id")}${addAttribute(`youtubeModalTrigger ${classNames}`, "class")}> ${renderSlot($$result, $$slots["default"])} </span>  <!-- When user scroll to this point the ScrollToArrow is shown --> <!-- <div id="showArrowScrollTrigger"></div> --> <!-- <div class="border-t border-slate-700 block md:hidden"></div> -->`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/widgets/YT_Trigger.astro", void 0);

const W = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Code: $$Code,
  DesktopWindow: $$DesktopWindow,
  HDivider: $$HDivider,
  Hero: $$PostHero,
  Hint: $$Hint,
  IFrame: $$IFrame,
  IconLink: $$IconLink,
  ImageCarousel: $$ImageCarousel,
  Img: $$Image,
  Key: $$Key,
  Notes: $$Notes,
  P: $$Paragraph,
  Phone: $$Phone,
  PixelFacebook: $$PixelFacebook,
  PostSeries: $$PostSeries,
  Separator: $$Separator,
  StackBlitz,
  StarsDecimal: $$StarsDecimal,
  Testimonial: $$Testimonial,
  Testimonials: $$Testimonials,
  Toggle: $$Toggle,
  YT_Modal: $$YTModal,
  YT_Trigger: $$YTTrigger
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://www.fabiobiondi.dev/");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <div class=" flex justify-between items-center"> <div class="flex items-center gap-3"> ${renderComponent($$result, "Image", $$Image$1, { "class": "menu_logo", "src": "/images/brand/laptop1.png", "width": 50, "height": 50, "alt": "logo" })} <a href="/" class="text-2xl sm:text-3xl mr-0 themetxt pt-1"><span class="font-thin">Fabio</span> <span class="font-extrabold">Biondi</span></a> </div> <div class="hamburger-button"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div> <!-- <div class="absolute bg-red-700 text-white text-sm font-bold text-center rotate-45 p-2 w-96 -right-40 top-4">BETA</div> --> </div> </div>  `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/core/Hamburger.astro", void 0);

const $$Astro$e = createAstro("https://www.fabiobiondi.dev/");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead()}<div id="themeToggle" class="cursor-pointer " data-astro-cid-3vjzidht> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-3vjzidht> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-3vjzidht></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-3vjzidht></path> </svg> </div>  `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/core/ThemeIcon.astro", void 0);

const $$Astro$d = createAstro("https://www.fabiobiondi.dev/");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links h-80 lg:h-24 flex items-center justify-between mx-10 collapsed transition-all !overflow-hidden"> <div class="flex flex-col lg:flex-row items-center justify-between w-full "> <a href="/" class="flex flex-col lg:flex-row items-center gap-x-2 !m-0 !p-0"> <div class="flex-none hidden lg:block"> ${renderComponent($$result, "Image", $$Image$1, { "class": "menu_logo", "src": import('../emote-laptop_Z92PEiLl.mjs'), "width": 100, "height": 100, "alt": "logo" })} </div> <div class=" text-2xl  lg:text-4xl hidden lg:block"> <span class="font-thin">FFFabio</span> <span class="font-extrabold">Biondi</span> </div> </a> <div class="flex flex-col lg:flex-row justify-between items-center gap-4"> <div class="flex flex-col lg:flex-row justify-center lg:justify-start "> <!-- <a href="/about/">About</a> --> <a class="menu_item block lg:hidden xl:block" href="/about/">About</a> <a class="menu_item" href="/blog/">Blog</a> <a class="menu_item" href="/tutorials/">Tutorials</a> <a class="menu_item" href="/video-courses/">🇮🇹 Video Courses</a> <!-- <a href="/tags/">Tags</a> --> </div> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} </div> </div> </div> `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/core/Navigation.astro", void 0);

const $$Astro$c = createAstro("https://www.fabiobiondi.dev/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate` ${maybeRenderHead()}<header class="mb-10 3xl:max-w-screen-3xl mx-auto"> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/core/Header.astro", void 0);

const $$Astro$b = createAstro("https://www.fabiobiondi.dev/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="fixed z-10 bg-red-700 text-white text-sm font-bold text-center rotate-45 p-2 w-96 -left-40 bottom-4" data-astro-cid-ofitbb36>BETA</div> <div class="footer p-10 relative" data-astro-cid-ofitbb36> <div class="mx-auto gap-x-32 gap-y-8 flex flex-col lg:flex-row justify-center" data-astro-cid-ofitbb36> <div data-astro-cid-ofitbb36> <div class="footer-title pb-1" data-astro-cid-ofitbb36>ABOUT ME </div> <div data-astro-cid-ofitbb36> <i class="fa fa-info-circle w-4 text-center" data-astro-cid-ofitbb36></i> <a aria-label="Visit the Profile Page" href="/about" data-astro-cid-ofitbb36>About Page</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-youtube w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Facebook Profile" href="https://www.youtube.com/c/FabioBiondi" data-astro-cid-ofitbb36>YouTube</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-linkedin w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the LinkedIn Profile" href="https://www.linkedin.com/in/fabiobiondi/" data-astro-cid-ofitbb36>LinkedIn</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-twitch w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Twitch Channel" href="https://www.twitch.tv/fabio_biondi" data-astro-cid-ofitbb36>Twitch</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-telegram w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Telegram Page" href="https://t.me/fabiobiondi" data-astro-cid-ofitbb36>Telegram Page</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-instagram w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Instagram Page" href="https://www.instagram.com/biondifabio/" data-astro-cid-ofitbb36>Instagram</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-facebook w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Facebook Page" href="https://www.facebook.com/groups/fabiobiondi.training" data-astro-cid-ofitbb36>Facebook Group</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-twitter w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Twitter Profile" href="https://twitter.com/biondifabio" data-astro-cid-ofitbb36>Twitter</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-bookmark w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" rel="noopener" aria-label="Visit the Dev.to Profile" href="https://dev.to/fabiobiondi" data-astro-cid-ofitbb36>Dev.To</a> </div> </div> <div data-astro-cid-ofitbb36> <div class="footer-title pb-1" data-astro-cid-ofitbb36>Communities</div> <div data-astro-cid-ofitbb36> <i class="fa fa-telegram w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" aria-label="Join WeAreDevs Community" href="https://t.me/we_are_devs" data-astro-cid-ofitbb36>We Are Devs</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-facebook w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" aria-label="Join Angular Community" href="https://www.facebook.com/groups/angularjs.developer.italiani" data-astro-cid-ofitbb36>Angular</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-facebook w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" aria-label="Join React Community" href="https://www.facebook.com/groups/react.developer.italiani" data-astro-cid-ofitbb36>React</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-facebook w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" aria-label="Join JavaScript Community" href="https://www.facebook.com/groups/javascript.developer.italiani" data-astro-cid-ofitbb36>JavaScript</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-facebook w-4 text-center" data-astro-cid-ofitbb36></i> <a target="_blank" aria-label="Join Opportunities Community" href="https://www.facebook.com/groups/opportunita.developer.italiani" data-astro-cid-ofitbb36>Opportunities</a> </div> </div> <div data-astro-cid-ofitbb36> <div class="footer-title pb-1" data-astro-cid-ofitbb36>PRODUCTS</div> <div data-astro-cid-ofitbb36> <i class="fa fa-book w-4 text-center" data-astro-cid-ofitbb36></i> <a aria-label="Visit Training Page" href="https://formazione.fabiobiondi.io/" target="_blank" rel="noopener" data-astro-cid-ofitbb36>Front-End Training (ita)</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-video-camera w-4 text-center" data-astro-cid-ofitbb36></i> <a aria-label="Visit Video Courses Page" href="/video-courses" data-astro-cid-ofitbb36>Video Courses (ita)</a> </div> <!-- <div>
        <i class="fa fa-graduation-cap"></i>
        <a aria-label="Visit Academy Profile" href="https://academy.talent-factory.it/" target="_blank" rel="noopener">Angular / React Academies</a> 
      </div> --> <div class="footer-title pb-1 pt-4" data-astro-cid-ofitbb36>SECTIONS</div> <div data-astro-cid-ofitbb36> <i class="fa fa-code w-4 text-center" data-astro-cid-ofitbb36></i> <a aria-label="Blog" href="/blog" rel="noopener" data-astro-cid-ofitbb36>Blog</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-graduation-cap w-4 text-center" data-astro-cid-ofitbb36></i> <a aria-label="Tutorials" href="/tutorials" rel="noopener" data-astro-cid-ofitbb36>Tutorials</a> </div> <div data-astro-cid-ofitbb36> <i class="fa fa-user w-4 text-center" data-astro-cid-ofitbb36></i> <a aria-label="About" href="/about" rel="noopener" data-astro-cid-ofitbb36>About</a> </div> </div> <div class="flex flex-col gap-3 justify-center" data-astro-cid-ofitbb36> <div data-astro-cid-ofitbb36> ${renderComponent($$result, "Image", $$Image$1, { "src": import('../emote-opla_iUWA3fXd.mjs'), "class": "w-full text-center", "width": 140, "aspectRatio": 1, "alt": "logo", "data-astro-cid-ofitbb36": true })} </div> <div class="w-full text-center" data-astro-cid-ofitbb36> <div data-astro-cid-ofitbb36> 2023 Fabio Biondi | P.I. 01116230317 </div> <div data-astro-cid-ofitbb36> <a href="/privacy-policy" data-astro-cid-ofitbb36>Privacy Policy</a> | <a href="/cookie-policy" data-astro-cid-ofitbb36>Cookie Policy</a> </div> </div> </div> </div> <div id="scrollArrowbottom" class="absolute right-6 bottom-16 text-xl lg:text-2xl" data-astro-cid-ofitbb36> <i class="fa fa-arrow-up cursor-pointer	" data-astro-cid-ofitbb36></i> </div> </div>  `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/core/Footer.astro", void 0);

const $$Astro$a = createAstro("https://www.fabiobiondi.dev/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$9 = createAstro("https://www.fabiobiondi.dev/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$8 = createAstro("https://www.fabiobiondi.dev/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$7 = createAstro("https://www.fabiobiondi.dev/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$6 = createAstro("https://www.fabiobiondi.dev/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$5 = createAstro("https://www.fabiobiondi.dev/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$4 = createAstro("https://www.fabiobiondi.dev/");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$3 = createAstro("https://www.fabiobiondi.dev/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$2 = createAstro("https://www.fabiobiondi.dev/");
const $$CompactView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CompactView;
  return renderTemplate``;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/core/CompactView.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.fabiobiondi.dev/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    description = "",
    frontmatter = null,
    image = null,
    hideNavBar
  } = Astro2.props;
  console.log("...", Astro2.url.pathname, Astro2.site);
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = image ? new URL(image, Astro2.url) : new URL("/images/default-share-img-256.png", Astro2.url);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/svg+xml" href="/favicon-16x16.png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><!-- <link rel="icon" type="image/svg+xml" href="/favicon-16x16.png" /> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;700;800;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><meta name="facebook-domain-verification" content="6utfysbhmmy73m1e92ula8glanfv79"><meta name="viewport" content="width=device-width"><meta name="generator"', '><!-- <title>{pageTitle}</title>\n    <meta name="description" content={description}> -->', `<!-- <script is:inline src="/helpers/theme.utils.js"><\/script> --><script>
      const currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

      // Get the current theme from local storage
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      // If the current local storage item can be found
      if (currentTheme) {
        // Set the body data-theme attribute to match the local storage item
        document.documentElement.setAttribute("data-theme", currentTheme);
        window.localStorage.setItem("theme", currentTheme);
        //document.documentElement.classList.add("dark");
        // If the current theme is dark, check the theme toggle
        // if (currentTheme === "dark") {
        //   themeToggle.checked = true;
        // }
      }
    <\/script>`, "</head> <body> ", ' <div class="mx-3 lg:mx-10 my-4"> ', " </div> <div> ", " ", ' <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">   <!-- Matomo -->  <!-- End Matomo Code --> <!-- End Matomo Code --> <!-- COOKIE IUBENDA --> <script type="text/javascript">\n        var _iub = _iub || [];\n        _iub.csConfiguration = {\n          askConsentAtCookiePolicyUpdate: true,\n          ccpaAcknowledgeOnDisplay: true,\n          consentOnContinuedBrowsing: false,\n          countryDetection: true,\n          enableCcpa: true,\n          enableLgpd: true,\n          floatingPreferencesButtonDisplay: "bottom-right",\n          invalidateConsentWithoutLog: true,\n          lang: "en",\n          lgpdAppliesGlobally: false,\n          perPurposeConsent: true,\n          siteId: 2903640,\n          whitelabel: false,\n          cookiePolicyId: 19604960,\n          banner: {\n            acceptButtonDisplay: true,\n            closeButtonDisplay: false,\n            customizeButtonDisplay: true,\n            explicitWithdrawal: true,\n            listPurposes: true,\n            position: "bottom",\n            rejectButtonDisplay: true,\n          },\n        };\n      <\/script> <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"><\/script> <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async><\/script> </div> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": pageTitle + " " || "Fabio Biondi | Front-End Tutorials", "description": description, "canonical": canonicalURL.href, "openGraph": {
    image: {
      url: socialImageURL.href,
      alt: pageTitle
    },
    basic: {
      title: pageTitle,
      type: description || "Fabio Biondi | Front-End Tutorials",
      image: socialImageURL.href,
      url: canonicalURL.href
      // image: 'https://astro-fabiobiondi-blog.vercel.app/images/default-share-img.png'
    },
    article: {
      publishedTime: frontmatter && frontmatter.pubDate,
      // modifiedTime: frontmatter && frontmatter.pubDate,
      // expirationTime: frontmatter && frontmatter.pubDate,
      authors: [frontmatter ? frontmatter.author : "Fabio Biondi"],
      section: "Programming",
      tags: frontmatter && frontmatter.tags
    }
  }, "extend": {
    // link: [{ rel: "icon", href: "/favicon.ico" }],
    meta: [
      {
        name: "twitter:image",
        // content: image || "/images/default-share-img.png",
        property: socialImageURL.href || "/images/default-share-img.png"
      },
      { name: "twitter:title", property: pageTitle },
      { name: "twitter:description", property: description }
    ]
  } }), renderHead(), renderComponent($$result, "W.YT_Modal", $$YTModal, {}), !hideNavBar && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CompactView", $$CompactView, {}));
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://www.fabiobiondi.dev/");
const prerender = false;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Fabio Biondi - FrontEnd Training", "description": "Training Angular, React, RxJS, Redux, JavaScript, TypeScript", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`
astro v.4 ${Math.random()}${maybeRenderHead()}<div class="page page-min themetxt" data-astro-cid-kh7btl4r> <h1 class="text-6xl font-extrabold" data-astro-cid-kh7btl4r>Fabio Biondi</h1> <h2 class="text-4xl mb-4" data-astro-cid-kh7btl4r>Full-time Front-End Instructor</h2> ${renderComponent($$result2, "Hint", $$Hint, { "type": "empty", "title": "WHAT IS MY JOB?", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="text-2xl" data-astro-cid-kh7btl4r> I teach front-end development and I'm especially focused on Angular & React ecosystems</div> ` })} <div class="text-md md:text-2xl" data-astro-cid-kh7btl4r> <div class="font-bold mb-3" data-astro-cid-kh7btl4r>QUICK SUMMARY</div> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>• Speaker, Content Creator & Community Founder</li> <li data-astro-cid-kh7btl4r>• Full time front-end trainer: Angular, React, RxJS, NGRX, Redux Toolkit, JS, TS ... </li> <li data-astro-cid-kh7btl4r>• 15+ years of experience in developing enterprise front-end applications and components</li> <li data-astro-cid-kh7btl4r>• <span class="font-bold" data-astro-cid-kh7btl4r>Google Developer Expert</span> in Angular since 2018</li> <li data-astro-cid-kh7btl4r>• <span class="font-bold" data-astro-cid-kh7btl4r>Microsoft MVP</span> / Developer Technologies since 2020</li> <li data-astro-cid-kh7btl4r>• Open source contributor of <span class="font-bold" data-astro-cid-kh7btl4r>QwikUI</span>, the UIKIT of <a class="text-sky-500" href="https://qwik.builder.io/" target="_blank" data-astro-cid-kh7btl4r>Qwik</a>, a next generation full-stack framework</li> <li data-astro-cid-kh7btl4r>• Ex Adobe Flash / Flex / Air Certified Expert and Instructor 😅</li> </ul> </div> <div class="text-base md:text-xl bg-slate-900 px-6 pt-6 pb-12 rounded-xl my-12 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute font-bold bg-orange-700 text-white -rotate-[24deg] p-1 w-96 -left-28 top-6 text-center" data-astro-cid-kh7btl4r>
MAIN TECHS
</div> <div class="ml-16 mt-12 text-white" data-astro-cid-kh7btl4r>
I'm especially focused in JavaScript front-end applications and all
        related aspects, both visuals and architecturals, I often work on
        cutting-edge libraries and frameworks offering training, development, code
        review and consulting on Angular, React and several other front-end
        technologies.
<br data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r>
I daily use both, Angular & React (since their beta versions). I love them and their ecosystems:
</div> <div class="flex flex-col md:flex-row gap-4 items-center md:justify-center" data-astro-cid-kh7btl4r> <div class="flex flex-col items-center justify-center w-full sm:w-1/2" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image$1, { "src": import('../angular-emotes_xnISOPb9.mjs'), "alt": "Angular", "height": 300, "quality": 90, "aspectRatio": 1, "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "center": true, "tags": ["Angular", "RxJS", "NGRX", "TypeScript"], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col items-center justify-center w-full sm:w-1/2" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image$1, { "src": import('../react-emote_gjygDHxa.mjs'), "alt": "React", "height": 300, "quality": 90, "aspectRatio": 2325 / 2037, "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "center": true, "tags": [
    "React",
    "Redux",
    "TypeScript",
    "RTK/RTK Query",
    "Zustand"
  ], "data-astro-cid-kh7btl4r": true })} </div> </div> </div> <div class="bg-slate-900 pt-6 pb-12 rounded-xl my-12 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute font-bold bg-sky-700 text-white -rotate-[24deg] p-1 w-96 -left-28 top-6 text-center" data-astro-cid-kh7btl4r>
OTHER SKILLS
</div> <div class="text-center px-12 mt-12 text-white" data-astro-cid-kh7btl4r> <div class="flex flex-col md:flex-row items-center gap-3 mt-3 " data-astro-cid-kh7btl4r>
Languages: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "tags": [
    "JavaScript",
    "TypeScript",
    "Python (newbie)"
  ], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3 " data-astro-cid-kh7btl4r>
UI Frameworks & Libs: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "tags": [
    "Astro",
    "NextJS",
    "Google Lit",
    "Qwik",
    "SolidJS"
  ], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3" data-astro-cid-kh7btl4r>
Tests: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "Tags": true, "tags": ["Jest", "Vitest", "React Testing Library", "Cypress"], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3" data-astro-cid-kh7btl4r>
Tools: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "Tags": true, "tags": ["WebPack", "ESBuild", "ViteJS"], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3 " data-astro-cid-kh7btl4r>
Animations and funcy UI: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "tags": [
    "GSAP / TweenMax",
    "D3.js (SVG)",
    "CreateJS (canvas)",
    "Framer Motion"
  ], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3" data-astro-cid-kh7btl4r>
Server: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "Tags": true, "tags": ["Node", "Azure", "Google Cloud", "Vercel"], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3" data-astro-cid-kh7btl4r>
RealTime: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "Tags": true, "tags": ["Firebase", "MQTT", "Sockets"], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3" data-astro-cid-kh7btl4r>
IoT: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "Tags": true, "tags": ["Arduino", "RaspBerry", "ESP32", "Circuit Python", "Micro Python"], "data-astro-cid-kh7btl4r": true })} </div> <div class="flex flex-col md:flex-row items-center gap-3 mt-3" data-astro-cid-kh7btl4r>
Design Tools: ${renderComponent($$result2, "Tags", $$Tags, { "white": true, "Tags": true, "tags": ["Affinity Suite", "Sketch", "Balsamiq Mockup"], "data-astro-cid-kh7btl4r": true })} </div> </div> </div> <div class="bg-slate-900 pt-6 pb-12 rounded-xl my-12 relative overflow-hidden" data-astro-cid-kh7btl4r> <div class="flex flex-col lg:flex-row items-center gap-8 text-base lg:text-xl p-6" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image$1, { "src": import('../social2.0-low__iWSc5dS.mjs'), "alt": "Social Icon", "height": 300, "quality": 90, "aspectRatio": 1, "data-astro-cid-kh7btl4r": true })} </div> <div class="text-white" data-astro-cid-kh7btl4r> <h1 class="text-2xl font-bold " data-astro-cid-kh7btl4r>COMMUNITY</h1> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>
• I run 4 Facebook Groups (Angular, React, JavaScript and Job Opportunities with more or less 40K members)
</li> <li data-astro-cid-kh7btl4r>
• I run a YouTube Channel and I'm Twitch Partner where I often
              teach, share what I learn and my experiments
</li> <li data-astro-cid-kh7btl4r>
• I am Twitch Partner: I learn in public, teach and interview guest speakers
</li> </ul> <br data-astro-cid-kh7btl4r> <span class="px-6 py-2 my-6 font-bold rounded-xl border border-sky-600 text-white" data-astro-cid-kh7btl4r>
All links are available in the footer
</span> </div> </div> </div> </div> ` })} `;
}, "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/about.astro", void 0);

const $$file = "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image$1 as $, StackBlitz2 as S, W, $$DesktopWindow as a, $$Code as b, $$IFrame as c, $$PostSeries as d, $$Hint as e, $$Image as f, getConfiguredImageService as g, $$Notes as h, imageConfig as i, $$Key as j, $$HDivider as k, $$Toggle as l, $$Difficulty as m, $$YTTrigger as n, $$Paragraph as o, $$PixelFacebook as p, $$Separator as q, $$Testimonials as r, $$Tags as s, getAllPosts as t, $$BaseLayout as u, $$Picture as v, $$PostHero as w, $$Phone as x, $$Stats as y, about as z };
