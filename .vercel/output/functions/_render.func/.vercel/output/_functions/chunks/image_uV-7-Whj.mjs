const image = new Proxy({"src":"/_astro/image.ECVpyPOB.png","width":458,"height":906,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/simple-crud-in-angular/images/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
