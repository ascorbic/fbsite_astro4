const emoteReactiveForms = new Proxy({"src":"/_astro/emote-reactive-forms.rmvxmoxR.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fabiobiondi/Documents/training/corsi-astro/fbsite_astro4/src/pages/video-courses/angular-reactive-forms/images/emote-reactive-forms.png";
							}
							
							return target[name];
						}
					});

export { emoteReactiveForms as default };
