const daniel_barell = new Proxy({"src":"/_astro/daniel_barell.fMbkX4rc.jpg","width":90,"height":90,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/daniel_barell.jpg";
							}
							
							return target[name];
						}
					});

export { daniel_barell as default };
