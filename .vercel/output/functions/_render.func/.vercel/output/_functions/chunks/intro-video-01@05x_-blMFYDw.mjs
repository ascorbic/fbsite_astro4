const introVideo01_05x = new Proxy({"src":"/_astro/intro-video-01@05x.hDGZSrQ5.jpg","width":640,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/video/intro-video-01@05x.jpg";
							}
							
							return target[name];
						}
					});

export { introVideo01_05x as default };
