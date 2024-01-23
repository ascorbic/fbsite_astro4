const reactEmote = new Proxy({"src":"/_astro/emote-atom.m4kimoes.png","width":2325,"height":2037,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/courses/react-emote.png";
							}
							
							return target[name];
						}
					});

export { reactEmote as default };
