const DEFAULT = new Proxy({"src":"/_astro/DEFAULT.ShaAhv0W.png","width":1920,"height":1920,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/DEFAULT.png";
							}
							
							return target[name];
						}
					});

export { DEFAULT as default };
