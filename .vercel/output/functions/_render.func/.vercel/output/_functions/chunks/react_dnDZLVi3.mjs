const react = new Proxy({"src":"/_astro/react.qjMXU3TT.png","width":320,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/react.png";
							}
							
							return target[name];
						}
					});

export { react as default };
