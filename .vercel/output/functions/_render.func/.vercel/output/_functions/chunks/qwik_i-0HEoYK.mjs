const qwik = new Proxy({"src":"/_astro/qwik.Xn_JChGg.png","width":321,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/qwik.png";
							}
							
							return target[name];
						}
					});

export { qwik as default };
