const desktopNgrx = new Proxy({"src":"/_astro/desktop-ngrx.EiatRV_o.png","width":750,"height":562,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/video/desktop-ngrx.png";
							}
							
							return target[name];
						}
					});

export { desktopNgrx as default };
