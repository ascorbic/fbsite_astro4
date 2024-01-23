const bonusChapters = new Proxy({"src":"/_astro/bonus-chapters.IGKw8sve.png","width":801,"height":385,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/misc/bonus-chapters.png";
							}
							
							return target[name];
						}
					});

export { bonusChapters as default };
