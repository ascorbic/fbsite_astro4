const setup2 = new Proxy({"src":"/_astro/setup2._XPEyD02.png","width":2488,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/misc/setup2.png";
							}
							
							return target[name];
						}
					});

export { setup2 as default };
