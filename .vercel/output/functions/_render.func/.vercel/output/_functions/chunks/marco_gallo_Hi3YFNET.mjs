const marco_gallo = new Proxy({"src":"/_astro/marco_gallo.1BZtun4j.jpg","width":657,"height":960,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/marco_gallo.jpg";
							}
							
							return target[name];
						}
					});

export { marco_gallo as default };
