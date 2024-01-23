import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro_BmwxeYug.mjs';
import { $ as $$Image, b as $$Code, d as $$PostSeries } from './pages/about_PE_7gdIc.mjs';
import 'react/jsx-runtime';
import 'react';
import 'clsx';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./BlogPageLayout_olAEm71k.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../../../layouts/BlogPageLayout.astro",
  "slug": "2022-11/post-5",
  "title": "JavaScript ES6 - reduce array function",
  "title1": "JavaScript ES6",
  "title2": "reduce  array function",
  "author": ["Fabio Biondi"],
  "description": "Tip's'Trick to use reduce with primitives, array, objects",
  "image": {
    "blur": "girasoli.png",
    "url": "js.png",
    "alt": "a small ninja"
  },
  "pubDate": "2022-08-08T00:00:00.000Z",
  "tags": ["astro", "javascript"],
  "difficulty": 2,
  "draft": true,
  "minutesRead": "2 min read",
  "minutesTotal": 2
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "codesandpack-angular",
    "text": "CodeSandPack: Angular"
  }, {
    "depth": 1,
    "slug": "how-it-works",
    "text": "How it works"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "codesandpack-angular",
      children: "CodeSandPack: Angular"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.lipsum.com/feed/html",
        children: "Lorem ipsum"
      }), " dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac. Praesent vel eleifend nulla. Cras urna tortor, imperdiet sed odio vel, vulputate pulvinar nulla. Nunc malesuada nulla ut odio ornare ultrices. Pellentesque rutrum ex in nunc sodales maximus. Suspendisse cursus ipsum ac ipsum imperdiet maximus. Vivamus lacinia quam sed lorem dapibus efficitur. Aenean quis viverra orci, vitae elementum dui. Aenean sagittis maximus ex. Nam quis ligula massa. Pellentesque convallis in velit vitae aliquet."]
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac."
    }), "\n", createVNode(_components.h1, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", createVNode(_components.p, {
      children: "This is a great way to style things like blog posts, or documents with CMS-powered content where the contents live outside of Astro. But be careful: components whose appearance differs based on whether or not they have a certain parent component can become difficult to troubleshoot."
    }), "\n", createVNode($$Code, {
      children: createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " rss "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " '@astrojs/rss'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " const"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " get"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " rss"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  title: "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'Astro Learner | Blog'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  description: "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'My journey learning Astro'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  site: "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'https://my-blog-site.netlify.app'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  items: "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "meta"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "glob"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'./**/*.md'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "),"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  customData: "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`<language>en-us</language>`"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "})"
            })
          })]
        })
      })
    }), "\n", createVNode($$PostSeries, {
      frontmatter: frontmatter
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/blog/_2022-11/post-5";
const file = "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/post-5/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/post-5/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
