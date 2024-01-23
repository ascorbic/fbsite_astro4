const fabiobiondi = new Proxy({"src":"/_astro/fabiobiondi.X9vZlHO2.jpg","width":1262,"height":946,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/misc/fabiobiondi.jpg";
							}
							
							return target[name];
						}
					});

export { fabiobiondi as default };
