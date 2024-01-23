const logoRxjs = new Proxy({"src":"/_astro/logo-rxjs.XkZ75Fxa.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/misc/logo-rxjs.png";
							}
							
							return target[name];
						}
					});

export { logoRxjs as default };
