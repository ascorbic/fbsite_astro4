const fotoStudio = new Proxy({"src":"/_astro/foto-studio.dlz6DA42.png","width":514,"height":326,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/misc/foto-studio.png";
							}
							
							return target[name];
						}
					});

export { fotoStudio as default };
