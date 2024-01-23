const folder = new Proxy({"src":"/_astro/folder.x3U52Vv6.png","width":425,"height":393,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/react-pro-real-world-applications/images/screenshoots/folder.png";
							}
							
							return target[name];
						}
					});

export { folder as default };
