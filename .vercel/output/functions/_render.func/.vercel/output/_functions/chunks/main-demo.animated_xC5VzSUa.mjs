const mainDemo_animated = new Proxy({"src":"/_astro/main-demo.animated.RtslcROj.gif","width":482,"height":510,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/simple-crud-in-angular/images/main-demo.animated.gif";
							}
							
							return target[name];
						}
					});

export { mainDemo_animated as default };
