const emoteNgrx = new Proxy({"src":"/_astro/emote-ngrx.LuVjZLQR.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/emote-ngrx.png";
							}
							
							return target[name];
						}
					});

export { emoteNgrx as default };
