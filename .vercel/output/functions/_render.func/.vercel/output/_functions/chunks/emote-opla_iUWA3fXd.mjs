const emoteOpla = new Proxy({"src":"/_astro/emote-opla._CelARBT.png","width":1900,"height":1900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/images/brand/emote-opla.png";
							}
							
							return target[name];
						}
					});

export { emoteOpla as default };
