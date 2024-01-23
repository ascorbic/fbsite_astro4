const logoNgrx = new Proxy({"src":"/_astro/logo-ngrx.oH1og0Jh.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/misc/logo-ngrx.png";
							}
							
							return target[name];
						}
					});

export { logoNgrx as default };
