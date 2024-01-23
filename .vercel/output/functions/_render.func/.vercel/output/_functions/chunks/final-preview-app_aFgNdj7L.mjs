const finalPreviewApp = new Proxy({"src":"/_astro/final-preview-app.gTV3Eq0p.gif","width":640,"height":402,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/final-preview-app.gif";
							}
							
							return target[name];
						}
					});

export { finalPreviewApp as default };
