const image = new Proxy({"src":"/_astro/image.aKGA4Owi.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2022-09/esbuild-and-react-hello-world/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
