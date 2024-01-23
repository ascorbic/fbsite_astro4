const reactEmoteFinger = new Proxy({"src":"/_astro/react-emote-finger.0UHHwqHU.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/blog/2022-09/how-to-write-react-uikit-components-in-typescript-that-extends-native-elements/react-emote-finger.png";
							}
							
							return target[name];
						}
					});

export { reactEmoteFinger as default };
