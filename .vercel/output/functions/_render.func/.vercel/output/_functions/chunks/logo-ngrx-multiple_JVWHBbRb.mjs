const logoNgrxMultiple = new Proxy({"src":"/_astro/logo-ngrx-multiple.tpDFCaMD.png","width":405,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/misc/logo-ngrx-multiple.png";
							}
							
							return target[name];
						}
					});

export { logoNgrxMultiple as default };
