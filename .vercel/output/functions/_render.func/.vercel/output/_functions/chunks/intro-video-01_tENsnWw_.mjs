const introVideo01 = new Proxy({"src":"/_astro/intro-video-01.Ta8Zvnwu.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/video/intro-video-01.jpg";
							}
							
							return target[name];
						}
					});

export { introVideo01 as default };
