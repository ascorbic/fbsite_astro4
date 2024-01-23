const navbarPreview = new Proxy({"src":"/_astro/navbar-preview.u0oKcoZ6.png","width":640,"height":237,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/navbar-preview.png";
							}
							
							return target[name];
						}
					});

export { navbarPreview as default };
