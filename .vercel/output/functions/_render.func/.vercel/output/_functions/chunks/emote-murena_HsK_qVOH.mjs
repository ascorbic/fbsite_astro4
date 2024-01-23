const emoteMurena = new Proxy({"src":"/_astro/emote-murena.otOBa5bv.png","width":2106,"height":2376,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/emote-murena.png";
							}
							
							return target[name];
						}
					});

export { emoteMurena as default };
