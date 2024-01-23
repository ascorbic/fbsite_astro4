const navbarEmpty = new Proxy({"src":"/_astro/navbar-empty.1PrW9A6B.png","width":640,"height":168,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/navbar-empty.png";
							}
							
							return target[name];
						}
					});

export { navbarEmpty as default };
