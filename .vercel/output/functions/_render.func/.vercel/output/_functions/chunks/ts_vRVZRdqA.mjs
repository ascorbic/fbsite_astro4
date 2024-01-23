const ts = new Proxy({"src":"/_astro/ts.Rgm_W9yq.png","width":320,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/ts.png";
							}
							
							return target[name];
						}
					});

export { ts as default };
