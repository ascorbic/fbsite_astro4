const corsoGit = new Proxy({"src":"/_astro/corso-git.Juab90WB.jpg","width":900,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/video/corso-git.jpg";
							}
							
							return target[name];
						}
					});

export { corsoGit as default };
