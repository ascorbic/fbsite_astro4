const ngVersion = new Proxy({"src":"/_astro/ng-version.wwPEdMw4.png","width":813,"height":704,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/simple-crud-in-angular/images/ng-version.png";
							}
							
							return target[name];
						}
					});

export { ngVersion as default };
