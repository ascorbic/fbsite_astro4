const coreModule = new Proxy({"src":"/_astro/core-module.3e-oUyfo.png","width":988,"height":517,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/core-module.png";
							}
							
							return target[name];
						}
					});

export { coreModule as default };
