const preview = new Proxy({"src":"/_astro/preview.glqFozsq.png","width":1280,"height":1329,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/preview.png";
							}
							
							return target[name];
						}
					});

export { preview as default };
