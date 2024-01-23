const _reactEmote = new Proxy({"src":"/_astro/emote-atom.m4kimoes.png","width":2325,"height":2037,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2022-09/create-a-react-typescript-generic-component/_react-emote.png";
							}
							
							return target[name];
						}
					});

export { _reactEmote as default };
