const angFunExLesson_05x = new Proxy({"src":"/_astro/ang-fun-ex-lesson@05x.cYlaJwsm.jpg","width":640,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/video/ang-fun-ex-lesson@05x.jpg";
							}
							
							return target[name];
						}
					});

export { angFunExLesson_05x as default };
