const introVideo02 = new Proxy({"src":"/_astro/intro-video-02.tVfJ_Crq.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/video/intro-video-02.jpg";
							}
							
							return target[name];
						}
					});

export { introVideo02 as default };
