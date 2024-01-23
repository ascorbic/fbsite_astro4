const image = new Proxy({"src":"/_astro/image.EobPOswW.png","width":7600,"height":7600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-standalone-apps/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
