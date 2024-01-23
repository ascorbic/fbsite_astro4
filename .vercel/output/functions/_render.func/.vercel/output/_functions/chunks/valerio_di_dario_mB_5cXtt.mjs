const valerio_di_dario = new Proxy({"src":"/_astro/valerio_di_dario.vfqaZhsD.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/valerio_di_dario.jpg";
							}
							
							return target[name];
						}
					});

export { valerio_di_dario as default };
