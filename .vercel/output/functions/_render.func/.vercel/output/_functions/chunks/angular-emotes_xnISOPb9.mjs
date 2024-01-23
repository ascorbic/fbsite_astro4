const angularEmotes = new Proxy({"src":"/_astro/image.VHOF0DkQ.png","width":2044,"height":2086,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/courses/angular-emotes.png";
							}
							
							return target[name];
						}
					});

export { angularEmotes as default };
