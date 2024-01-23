const shop_cart = new Proxy({"src":"/_astro/shop_cart.34xcOqYG.png","width":1920,"height":1001,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/react-pro-real-world-applications/images/screenshoots/shop_cart.png";
							}
							
							return target[name];
						}
					});

export { shop_cart as default };
