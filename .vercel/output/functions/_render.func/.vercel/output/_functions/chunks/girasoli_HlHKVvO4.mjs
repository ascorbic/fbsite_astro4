const girasoli = new Proxy({"src":"/_astro/girasoli.7cBTgVq6.png","width":1368,"height":855,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/post-5/girasoli.png";
							}
							
							return target[name];
						}
					});

export { girasoli as default };
