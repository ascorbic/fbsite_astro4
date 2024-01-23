const navbarSchematic = new Proxy({"src":"/_astro/navbar-schematic.w4O4wrBQ.png","width":1047,"height":138,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/navbar-schematic.png";
							}
							
							return target[name];
						}
					});

export { navbarSchematic as default };
