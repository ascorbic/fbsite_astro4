const devtoolsLazyloading = new Proxy({"src":"/_astro/devtools-lazyloading.ZHZaq-sS.png","width":1316,"height":612,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/devtools-lazyloading.png";
							}
							
							return target[name];
						}
					});

export { devtoolsLazyloading as default };
