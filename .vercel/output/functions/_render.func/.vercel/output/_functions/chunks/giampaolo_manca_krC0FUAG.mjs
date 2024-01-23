const giampaolo_manca = new Proxy({"src":"/_astro/giampaolo_manca.Qa79u5lt.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/giampaolo_manca.png";
							}
							
							return target[name];
						}
					});

export { giampaolo_manca as default };
