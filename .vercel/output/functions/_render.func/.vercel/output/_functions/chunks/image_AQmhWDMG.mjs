const image = new Proxy({"src":"/_astro/image.keFCZptv.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2023-08/qwik-create-and-deploy-a-project-in-vercel/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
