const social2_0Low = new Proxy({"src":"/_astro/social2.0-low.JY8ZRJuB.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/brand/social2.0-low.png";
							}
							
							return target[name];
						}
					});

export { social2_0Low as default };
