const subNetworkLazy = new Proxy({"src":"/_astro/sub-network-lazy.TWsw_-VG.png","width":935,"height":743,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/tutorials/angular/angular-ng-modules-and-router/images/sub-network-lazy.png";
							}
							
							return target[name];
						}
					});

export { subNetworkLazy as default };
