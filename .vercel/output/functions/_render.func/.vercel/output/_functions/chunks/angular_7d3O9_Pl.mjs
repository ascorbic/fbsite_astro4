const angular = new Proxy({"src":"/_astro/angular.EFyfN8Rq.png","width":320,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/icons/techs/angular.png";
							}
							
							return target[name];
						}
					});

export { angular as default };
