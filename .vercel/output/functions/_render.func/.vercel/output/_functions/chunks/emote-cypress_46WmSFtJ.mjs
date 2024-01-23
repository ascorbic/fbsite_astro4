const emoteCypress = new Proxy({"src":"/_astro/emote-report.-hg8jaVu.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/emote-cypress.png";
							}
							
							return target[name];
						}
					});

export { emoteCypress as default };
