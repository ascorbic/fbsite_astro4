const howItWorksAnimation = new Proxy({"src":"/_astro/how-it-works-animation.1occyGma.gif","width":960,"height":540,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2023-08/qwik-fetch-data-with-routerloader/images/how-it-works-animation.gif";
							}
							
							return target[name];
						}
					});

export { howItWorksAnimation as default };
