const image = new Proxy({"src":"/_astro/image.aMJ-ChQk.png","width":1900,"height":1900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2023-01/how-to-safely-type-usereducer-in-react-and-typescript/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
