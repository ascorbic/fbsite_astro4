const corsoBundleNgrx = new Proxy({"src":"/_astro/corso-bundle-ngrx.OuD_qFlT.jpg","width":900,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/ngrx/images/misc/corso-bundle-ngrx.jpg";
							}
							
							return target[name];
						}
					});

export { corsoBundleNgrx as default };
