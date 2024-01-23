const logoNgrxMultiple = new Proxy({"src":"/_astro/logo-ngrx-multiple.qCxh4fN6.jpg","width":405,"height":130,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/misc/logo-ngrx-multiple.jpg";
							}
							
							return target[name];
						}
					});

export { logoNgrxMultiple as default };
