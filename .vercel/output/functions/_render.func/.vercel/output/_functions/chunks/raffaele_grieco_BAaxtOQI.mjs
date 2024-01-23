const raffaele_grieco = new Proxy({"src":"/_astro/raffaele_grieco.hP0M5TvO.jpg","width":3921,"height":3235,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/raffaele_grieco.jpg";
							}
							
							return target[name];
						}
					});

export { raffaele_grieco as default };
