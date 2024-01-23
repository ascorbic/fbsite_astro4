const mauromorici = new Proxy({"src":"/_astro/mauromorici.Y7gctUbg.jpg","width":6560,"height":4928,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/mauromorici.jpg";
							}
							
							return target[name];
						}
					});

export { mauromorici as default };
