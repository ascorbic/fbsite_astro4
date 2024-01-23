const introVideo04_05x = new Proxy({"src":"/_astro/intro-video-04@05x.fBBt-xW6.jpg","width":640,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/rxjs/images/video/intro-video-04@05x.jpg";
							}
							
							return target[name];
						}
					});

export { introVideo04_05x as default };
