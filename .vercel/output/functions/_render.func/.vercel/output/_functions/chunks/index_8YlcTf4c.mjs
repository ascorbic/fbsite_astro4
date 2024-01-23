import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro_BmwxeYug.mjs';
import { $ as $$Image, k as $$HDivider, b as $$Code, j as $$Key, s as $$Tags, c as $$IFrame, a as $$DesktopWindow, x as $$Phone, l as $$Toggle, e as $$Hint, f as $$Image$1 } from './pages/about_PE_7gdIc.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

function HelloReact() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState("");
  async function loadData() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const randomUser = data.results[0];
    setUser(randomUser.name.first + " " + randomUser.name.last);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsx("button", { className: "btn btn-secondary", onClick: loadData, children: user || "load random user" }),
    /* @__PURE__ */ jsx("button", { className: "btn btn-secondary", onClick: () => setCounter((s) => counter + 1), children: counter })
  ] });
}

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
  "slug": "2022-11/astro-uikit",
  "title": "ASTRO UIKIT - My Blog Component Kit",
  "title1": "ASTRO UIKIT",
  "title2": "My Blog Component Kit",
  "author": ["Fabio Biondi"],
  "description": "A gentle introduction to Astro and Islands Architectures",
  "image": {
    "blur": "js-ts.jpg",
    "url": "ninja.png",
    "alt": "a small ninja"
  },
  "pubDate": "2022-08-08T00:00:00.000Z",
  "tags": ["astro", "javascript"],
  "difficulty": 3,
  "draft": true,
  "minutesRead": "3 min read",
  "minutesTotal": 3
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "paragraph",
    "text": "Paragraph"
  }, {
    "depth": 2,
    "slug": "topics",
    "text": "TOPICS"
  }, {
    "depth": 1,
    "slug": "blockquote",
    "text": "BlockQuote"
  }, {
    "depth": 1,
    "slug": "divider",
    "text": "Divider"
  }, {
    "depth": 1,
    "slug": "code",
    "text": "Code"
  }, {
    "depth": 1,
    "slug": "key",
    "text": "Key"
  }, {
    "depth": 1,
    "slug": "tags",
    "text": "Tags"
  }, {
    "depth": 1,
    "slug": "iframe",
    "text": "IFrame"
  }, {
    "depth": 1,
    "slug": "windows",
    "text": "Windows"
  }, {
    "depth": 2,
    "slug": "desktopwindow--react-component",
    "text": "DesktopWindow + React Component"
  }, {
    "depth": 2,
    "slug": "phone--react-component",
    "text": "Phone + React Component"
  }, {
    "depth": 1,
    "slug": "toggle-panel",
    "text": "Toggle Panel"
  }, {
    "depth": 1,
    "slug": "hint",
    "text": "Hint"
  }, {
    "depth": 1,
    "slug": "images",
    "text": "Images"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.h2, {
      id: "paragraph",
      children: "Paragraph"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.lipsum.com/feed/html",
        children: "Lorem ipsum"
      }), " dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac. Praesent vel eleifend nulla. Cras urna tortor, imperdiet sed odio vel, vulputate pulvinar nulla. Nunc malesuada nulla ut odio ornare ultrices. Pellentesque rutrum ex in nunc sodales maximus. Suspendisse cursus ipsum ac ipsum imperdiet maximus. Vivamus lacinia quam sed lorem dapibus efficitur. Aenean quis viverra orci, vitae elementum dui. Aenean sagittis maximus ex. Nam quis ligula massa. Pellentesque convallis in velit vitae aliquet."]
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac."
    }), "\n", createVNode(_components.h2, {
      id: "topics",
      children: "TOPICS"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#blockquote",
          children: "BlockQuote"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#divider",
          children: "Divider"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#code",
          children: "Code"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#key",
          children: "Key"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#tags",
          children: "Tags"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#iframe",
          children: "IFrame"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#windows",
          children: "Windows"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#toggle-panel",
          children: "Toggle Panel"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#hint",
          children: "Hint"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#images",
          children: "Images"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "blockquote",
      children: "BlockQuote"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This is a great way to style things like blog posts, or documents with CMS-powered content where the contents live outside of Astro."
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "This is a great way to style things like blog posts, or documents with CMS-powered content where the contents live outside of Astro. But be careful: components whose appearance differs based on whether or not they have a certain parent component can become difficult to troubleshoot."
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "divider",
      children: "Divider"
    }), "\n", createVNode(_components.p, {
      children: [createVNode($$HDivider, {
        primary: true,
        children: " Divider "
      }), createVNode(_components.br, {}), "\n", createVNode($$HDivider, {
        secondary: true,
        children: " Divider "
      }), "\n", createVNode($$HDivider, {
        children: "SNIPPET"
      })]
    }), "\n", createVNode(_components.h1, {
      id: "code",
      children: "Code"
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
          children: createVNode(_components.span, {
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
          })
        })
      })
    }), "\n", createVNode(_components.h1, {
      id: "key",
      children: "Key"
    }), "\n", createVNode(_components.p, {
      children: [createVNode($$Key, {
        size: "sm",
        children: "Shift"
      }), " + ", createVNode($$Key, {
        children: "Shift"
      }), " + ", createVNode($$Key, {
        size: "md",
        children: "Shift"
      }), " + ", createVNode($$Key, {
        size: "lg",
        children: "Shift"
      })]
    }), "\n", createVNode(_components.h1, {
      id: "tags",
      children: "Tags"
    }), "\n", createVNode($$Tags, {
      tags: ["astro", "javascript"]
    }), "\n", createVNode(_components.h1, {
      id: "iframe",
      children: "IFrame"
    }), "\n", createVNode($$IFrame, {
      src: "https://stackblitz.com/edit/angular?embed=1"
    }), "\n", createVNode(_components.h1, {
      id: "windows",
      children: "Windows"
    }), "\n", createVNode(_components.h2, {
      id: "desktopwindow--react-component",
      children: "DesktopWindow + React Component"
    }), "\n", createVNode($$DesktopWindow, {
      children: createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$DesktopWindow, {
      isDark: true,
      children: createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$DesktopWindow, {
      isLight: true,
      children: [createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      }), createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      }), createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      }), createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      })]
    }), "\n", createVNode(_components.h2, {
      id: "phone--react-component",
      children: "Phone + React Component"
    }), "\n", createVNode($$Phone, {
      isTrasparent: true,
      children: createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$Phone, {
      children: createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$Phone, {
      isDark: true,
      isPadding: true,
      children: createVNode(_components.p, {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac. Praesent vel eleifend nulla. Cras urna tortor, imperdiet sed odio vel, vulputate pulvinar nulla. Nunc malesuada nulla ut odio ornare ultrices. Pellentesque rutrum ex in nunc sodales maximus. Suspendisse cursus ipsum ac ipsum imperdiet maximus. Vivamus lacinia quam sed lorem dapibus efficitur. Aenean quis viverra orci, vitae elementum dui. Aenean sagittis maximus ex. Nam quis ligula massa. Pellentesque convallis in velit vitae aliquet."
      })
    }), "\n", createVNode($$Phone, {
      isLight: true,
      children: createVNode(HelloReact, {
        "client:load": true,
        "client:component-path": "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/components/misc/HelloReact",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode("div", {
      class: "preview border-base-300 bg-base-200 rounded-b-box rounded-xl flex min-h-[6rem] min-w-[18rem] max-w-full flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4\nundefined",
      style: "background-image: url(https://placeimg.com/1000/500/arch)",
      children: createVNode("div", {
        class: "card w-96 glass",
        children: [createVNode("figure", {
          children: createVNode($$Image, {
            aspectRatio: 4 / 3,
            height: "400",
            src: "https://placeimg.com/1000/600/business",
            alt: "car!"
          })
        }), createVNode("div", {
          class: "card-body",
          children: [createVNode("h2", {
            class: "card-title text-black",
            children: "Workshop ABC"
          }), createVNode("p", {
            children: "How to park your car at your garage?"
          }), createVNode("div", {
            class: "card-actions justify-end",
            children: createVNode("button", {
              class: "btn btn-primary",
              children: "LEARN MORE"
            })
          })]
        })]
      })
    }), "\n", createVNode(_components.h1, {
      id: "toggle-panel",
      children: "Toggle Panel"
    }), "\n", createVNode($$Toggle, {
      title: "Expand",
      children: createVNode(_components.p, {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac."
      })
    }), "\n", createVNode(_components.h1, {
      id: "hint",
      children: "Hint"
    }), "\n", createVNode($$Hint, {
      children: createVNode(_components.p, {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac."
      })
    }), "\n", createVNode($$Hint, {
      title: "CUSTOM TITLE",
      img: "/images/brand/emote-setup.png",
      children: createVNode(_components.p, {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac."
      })
    }), "\n", createVNode($$Hint, {
      title: "BE CAREFUL",
      type: "alert",
      children: createVNode(_components.p, {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper malesuada dui, nec iaculis erat maximus at. Nullam porta rhoncus felis non lacinia. Vivamus viverra sapien nisi, sit amet placerat lacus ullamcorper ac."
      })
    }), "\n", createVNode(_components.h1, {
      id: "images",
      children: "Images"
    }), "\n", createVNode($$Image$1, {
      src: import('./ninja_xPeRqjc5.mjs'),
      align: "start",
      w: 200
    }), "\n", createVNode($$Image$1, {
      src: import('./ninja_xPeRqjc5.mjs'),
      w: 200
    }), "\n", createVNode($$Image$1, {
      src: import('./ninja_xPeRqjc5.mjs'),
      align: "end",
      w: 200
    }), "\n", createVNode($$Image$1, {
      src: import('./ninja_xPeRqjc5.mjs'),
      border: true,
      w: 200
    }), "\n", createVNode($$Image$1, {
      src: import('./girasoli_cd7cbLQv.mjs')
    }), "\n", createVNode($$Image$1, {
      src: import('./girasoli_cd7cbLQv.mjs'),
      border: true
    }), "\n", createVNode("div", {
      class: "flex",
      children: [createVNode("div", {
        class: "w-1/2",
        children: createVNode($$Image$1, {
          src: import('./girasoli_cd7cbLQv.mjs'),
          border: true
        })
      }), createVNode("div", {
        class: "w-1/2",
        children: createVNode($$Image$1, {
          src: import('./girasoli_cd7cbLQv.mjs'),
          border: true
        })
      })]
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
const url = "/blog/_2022-11/astro-uikit";
const file = "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/astro-uikit/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/astro-uikit/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
