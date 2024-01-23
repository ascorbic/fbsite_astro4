const js = new Proxy({"src":"/_astro/js.4G4pBMMa.png","width":320,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/js.png";
							}
							
							return target[name];
						}
					});

export { js as default };
