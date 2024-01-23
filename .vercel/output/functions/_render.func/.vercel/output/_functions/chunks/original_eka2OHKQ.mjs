const original = new Proxy({"src":"/_astro/original.pEPvD6Nj.png","width":896,"height":896,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/icons/original.png";
							}
							
							return target[name];
						}
					});

export { original as default };
