const desktopGit = new Proxy({"src":"/_astro/desktop-git.1z7zNoxM.png","width":750,"height":562,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/video/desktop-git.png";
							}
							
							return target[name];
						}
					});

export { desktopGit as default };
