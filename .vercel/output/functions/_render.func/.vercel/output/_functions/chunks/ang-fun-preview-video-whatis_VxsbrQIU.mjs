const angFunPreviewVideoWhatis = new Proxy({"src":"/_astro/ang-fun-preview-video-whatis.kIlQVHMV.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-fundamentals/images/video/ang-fun-preview-video-whatis.jpg";
							}
							
							return target[name];
						}
					});

export { angFunPreviewVideoWhatis as default };
