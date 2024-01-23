const jsTs = new Proxy({"src":"/_astro/js-ts.7zy6wEaA.jpg","width":800,"height":406,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/astro-uikit/js-ts.jpg";
							}
							
							return target[name];
						}
					});

export { jsTs as default };
