const ngrxIntroCorso = new Proxy({"src":"/_astro/ngrx-intro-corso.OQzOYsiU.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/video/ngrx-intro-corso.jpg";
							}
							
							return target[name];
						}
					});

export { ngrxIntroCorso as default };
