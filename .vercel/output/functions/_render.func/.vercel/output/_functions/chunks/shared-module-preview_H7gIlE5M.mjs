const sharedModulePreview = new Proxy({"src":"/_astro/shared-module-preview.g-d4-UIh.png","width":1211,"height":691,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/shared-module-preview.png";
							}
							
							return target[name];
						}
					});

export { sharedModulePreview as default };
