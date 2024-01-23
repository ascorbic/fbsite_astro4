const astro = new Proxy({"src":"/_astro/astro.DKbr0p14.png","width":321,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/astro.png";
							}
							
							return target[name];
						}
					});

export { astro as default };
