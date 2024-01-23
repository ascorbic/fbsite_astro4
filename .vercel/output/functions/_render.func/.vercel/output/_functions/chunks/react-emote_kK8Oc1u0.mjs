const reactEmote = new Proxy({"src":"/_astro/emote-atom.m4kimoes.png","width":2325,"height":2037,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2022-09/how-to-write-react-uikit-components-in-typescript-that-extends-native-elements/react-emote.png";
							}
							
							return target[name];
						}
					});

export { reactEmote as default };
