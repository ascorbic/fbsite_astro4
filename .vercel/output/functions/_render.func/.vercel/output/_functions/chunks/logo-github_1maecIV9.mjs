const logoGithub = new Proxy({"src":"/_astro/logo-github.OIC8Ouv6.jpg","width":130,"height":130,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/logo-github.jpg";
							}
							
							return target[name];
						}
					});

export { logoGithub as default };
