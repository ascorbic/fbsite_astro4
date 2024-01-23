const giuseppe_de_masi = new Proxy({"src":"/_astro/giuseppe_de_masi.n9yj5mau.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/testimonials/giuseppe_de_masi.jpg";
							}
							
							return target[name];
						}
					});

export { giuseppe_de_masi as default };
