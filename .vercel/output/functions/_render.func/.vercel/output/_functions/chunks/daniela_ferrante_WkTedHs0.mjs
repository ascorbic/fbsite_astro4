const daniela_ferrante = new Proxy({"src":"/_astro/daniela_ferrante.WYV9JH8R.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/daniela_ferrante.jpg";
							}
							
							return target[name];
						}
					});

export { daniela_ferrante as default };
