const image = new Proxy({"src":"/_astro/image.ZFshOasu.png","width":2500,"height":2500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2022-09/react-antd-and-tailwind-fix-css-conflicts/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
