const desktopNgrx = new Proxy({"src":"/_astro/desktop-ngrx.FxySdlHx.jpg","width":750,"height":562,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/video/desktop-ngrx.jpg";
							}
							
							return target[name];
						}
					});

export { desktopNgrx as default };
