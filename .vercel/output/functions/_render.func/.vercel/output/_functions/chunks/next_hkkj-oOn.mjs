const next = new Proxy({"src":"/_astro/next.kH5zGg_g.png","width":321,"height":321,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/next.png";
							}
							
							return target[name];
						}
					});

export { next as default };
