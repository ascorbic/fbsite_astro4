const claudia_valente = new Proxy({"src":"/_astro/claudia_valente.xH01gYk6.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/claudia_valente.jpg";
							}
							
							return target[name];
						}
					});

export { claudia_valente as default };
