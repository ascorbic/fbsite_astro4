const alessio_monterosso = new Proxy({"src":"/_astro/alessio_monterosso.1tQsVkzn.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/alessio_monterosso.jpg";
							}
							
							return target[name];
						}
					});

export { alessio_monterosso as default };
