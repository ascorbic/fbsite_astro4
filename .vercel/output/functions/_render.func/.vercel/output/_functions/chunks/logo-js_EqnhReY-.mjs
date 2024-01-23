const logoJs = new Proxy({"src":"/_astro/logo-js.phNSzbQM.jpg","width":130,"height":130,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/js-ts/images/logo-js.jpg";
							}
							
							return target[name];
						}
					});

export { logoJs as default };
