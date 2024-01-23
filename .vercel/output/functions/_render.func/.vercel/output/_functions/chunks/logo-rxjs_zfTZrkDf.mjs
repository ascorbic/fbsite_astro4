const logoRxjs = new Proxy({"src":"/_astro/logo-rxjs.l5qPtxmF.jpg","width":130,"height":130,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/misc/logo-rxjs.jpg";
							}
							
							return target[name];
						}
					});

export { logoRxjs as default };
