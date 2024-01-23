const image = new Proxy({"src":"/_astro/image.LUgemgCn.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2023-01/ngrx-15-createAction-group-and-create-feature/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
