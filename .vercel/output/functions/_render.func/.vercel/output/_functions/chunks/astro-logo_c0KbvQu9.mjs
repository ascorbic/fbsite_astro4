const astroLogo = new Proxy({"src":"/_astro/astro-logo.FDSVbNik.png","width":1517,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/post-5/astro-logo.png";
							}
							
							return target[name];
						}
					});

export { astroLogo as default };
