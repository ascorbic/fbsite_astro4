const cheatsheet_cards = new Proxy({"src":"/_astro/cheatsheet_cards.WH5jyVNn.png","width":600,"height":546,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/react-pro-real-world-applications/images/cheatsheet_cards.png";
							}
							
							return target[name];
						}
					});

export { cheatsheet_cards as default };
