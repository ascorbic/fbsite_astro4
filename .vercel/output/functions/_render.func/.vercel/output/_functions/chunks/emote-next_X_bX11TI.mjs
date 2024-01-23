const emoteNext = new Proxy({"src":"/_astro/image.iVpEz1PS.png","width":2046,"height":2185,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/emote-next.png";
							}
							
							return target[name];
						}
					});

export { emoteNext as default };
