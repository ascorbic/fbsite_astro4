const part3ComponentTesting = new Proxy({"src":"/_astro/part3-component-testing.me3rXDMn.png","width":2230,"height":1164,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/scrivere-e2e-test-con-cypress/images/misc/part3-component-testing.png";
							}
							
							return target[name];
						}
					});

export { part3ComponentTesting as default };
