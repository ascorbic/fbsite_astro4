const emoteLaptop = new Proxy({"src":"/_astro/emote-laptop.DzezlRPj.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/brand/emote-laptop.png";
							}
							
							return target[name];
						}
					});

export { emoteLaptop as default };
