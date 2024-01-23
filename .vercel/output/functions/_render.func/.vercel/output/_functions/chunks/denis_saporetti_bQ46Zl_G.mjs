const denis_saporetti = new Proxy({"src":"/_astro/denis_saporetti.Vw3QBV0q.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/denis_saporetti.jpg";
							}
							
							return target[name];
						}
					});

export { denis_saporetti as default };
