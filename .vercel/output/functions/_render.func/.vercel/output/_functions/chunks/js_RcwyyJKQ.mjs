const js = new Proxy({"src":"/_astro/js.N-i0URuy.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/_2022-11/post-5/js.png";
							}
							
							return target[name];
						}
					});

export { js as default };
