const logoJs = new Proxy({"src":"/_astro/logo-js.QZo_AklV.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/js-ts/images/logo-js.png";
							}
							
							return target[name];
						}
					});

export { logoJs as default };
