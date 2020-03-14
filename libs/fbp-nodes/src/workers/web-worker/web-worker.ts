// declare const self: any;

(function () {
	enum PACKET_TYPE {
		INIT = 'init',
		PACKET = 'packet',
	}

	interface Message {
		type: PACKET_TYPE;
		payload: any;
	}

	let instance: any;

	self.addEventListener('message', function ({ data }: { data: Message }) {
		if (data.type === PACKET_TYPE.INIT) {
			const path = `/dist/nodes/${data.payload}/${data.payload}.js`;
			import(path).then((mod: any) => {
				instance = new mod.MyTestCls();
				console.log("YES ", instance);
			});
		} else {
			instance.update(data.payload);
		}
	});
})();