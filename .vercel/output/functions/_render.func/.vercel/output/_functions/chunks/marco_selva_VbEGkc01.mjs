const marco_selva = new Proxy({"src":"/_astro/marco_selva.cRIvYeCX.jpg","width":960,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/marco_selva.jpg";
							}
							
							return target[name];
						}
					});

export { marco_selva as default };
