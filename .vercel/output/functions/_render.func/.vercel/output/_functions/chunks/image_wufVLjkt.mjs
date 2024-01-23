const image = new Proxy({"src":"/_astro/image.pY_w-pB4.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-basics/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
