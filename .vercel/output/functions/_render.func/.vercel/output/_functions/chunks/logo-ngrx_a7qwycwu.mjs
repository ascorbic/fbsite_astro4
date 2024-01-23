const logoNgrx = new Proxy({"src":"/_astro/logo-ngrx.8twWvozF.jpg","width":130,"height":130,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/misc/logo-ngrx.jpg";
							}
							
							return target[name];
						}
					});

export { logoNgrx as default };
