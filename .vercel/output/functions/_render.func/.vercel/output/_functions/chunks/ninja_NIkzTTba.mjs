const ninja = new Proxy({"src":"/_astro/ninja.UHPYvqLc.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/post-5/ninja.png";
							}
							
							return target[name];
						}
					});

export { ninja as default };
