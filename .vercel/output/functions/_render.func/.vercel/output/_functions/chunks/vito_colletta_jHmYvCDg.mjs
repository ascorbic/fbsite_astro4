const vito_colletta = new Proxy({"src":"/_astro/vito_colletta.eS7D3pRg.png","width":3508,"height":3186,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/vito_colletta.png";
							}
							
							return target[name];
						}
					});

export { vito_colletta as default };
