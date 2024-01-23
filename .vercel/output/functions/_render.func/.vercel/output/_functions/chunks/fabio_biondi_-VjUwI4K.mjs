const fabio_biondi = new Proxy({"src":"/_astro/fabio_biondi.XRIMwFS6.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/fabio_biondi.jpg";
							}
							
							return target[name];
						}
					});

export { fabio_biondi as default };
