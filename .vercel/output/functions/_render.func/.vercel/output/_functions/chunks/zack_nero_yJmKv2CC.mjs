const zack_nero = new Proxy({"src":"/_astro/zack_nero.9ysVVzSY.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/zack_nero.jpg";
							}
							
							return target[name];
						}
					});

export { zack_nero as default };
