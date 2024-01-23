const desktopGit = new Proxy({"src":"/_astro/desktop-git.crLG3IR2.jpg","width":750,"height":562,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/video/desktop-git.jpg";
							}
							
							return target[name];
						}
					});

export { desktopGit as default };
