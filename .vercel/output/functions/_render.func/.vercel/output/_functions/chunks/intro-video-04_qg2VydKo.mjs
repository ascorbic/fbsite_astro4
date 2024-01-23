const introVideo04 = new Proxy({"src":"/_astro/intro-video-04.GXNB2J5C.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/video/intro-video-04.jpg";
							}
							
							return target[name];
						}
					});

export { introVideo04 as default };
