const emoteOc = new Proxy({"src":"/_astro/emote-oc.qNPIPWTi.png","width":2037,"height":2394,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/git-fundamentals/images/icons/emote-oc.png";
							}
							
							return target[name];
						}
					});

export { emoteOc as default };
