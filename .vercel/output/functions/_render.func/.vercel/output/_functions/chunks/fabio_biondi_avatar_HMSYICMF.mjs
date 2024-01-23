const fabio_biondi_avatar = new Proxy({"src":"/_astro/fabio_biondi_avatar.0yl-7PXh.jpg","width":165,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/reviews/fabio_biondi_avatar.jpg";
							}
							
							return target[name];
						}
					});

export { fabio_biondi_avatar as default };
