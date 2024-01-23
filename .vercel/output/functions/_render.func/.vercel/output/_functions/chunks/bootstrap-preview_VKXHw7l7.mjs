const bootstrapPreview = new Proxy({"src":"/_astro/bootstrap-preview.xsMDVBte.png","width":253,"height":78,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/bootstrap-preview.png";
							}
							
							return target[name];
						}
					});

export { bootstrapPreview as default };
