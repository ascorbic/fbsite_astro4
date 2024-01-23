const screenflowEditor = new Proxy({"src":"/_astro/screenflow-editor.S4GIFjSh.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-evolution/images/misc/screenflow-editor.png";
							}
							
							return target[name];
						}
					});

export { screenflowEditor as default };
