const giorgio_boa = new Proxy({"src":"/_astro/giorgio_boa.oe9eiKus.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/giorgio_boa.jpg";
							}
							
							return target[name];
						}
					});

export { giorgio_boa as default };
