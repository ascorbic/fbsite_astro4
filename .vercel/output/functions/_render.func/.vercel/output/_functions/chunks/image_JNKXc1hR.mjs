const image = new Proxy({"src":"/_astro/image.iVpEz1PS.png","width":2046,"height":2185,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2023-08/quick-intro-to-next13/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
