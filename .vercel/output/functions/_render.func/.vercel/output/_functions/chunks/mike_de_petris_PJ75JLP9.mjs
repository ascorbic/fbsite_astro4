const mike_de_petris = new Proxy({"src":"/_astro/mike_de_petris.Opvj3Cb0.jpg","width":923,"height":1234,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/mike_de_petris.jpg";
							}
							
							return target[name];
						}
					});

export { mike_de_petris as default };
