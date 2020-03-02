// import { lstatSync, readdirSync } form 'fs';
// import { join } = require('path')

import { readdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
// import { copySync } from 'fs-extra';
import path from 'path';

const getDirectories = (source: string) =>
	readdirSync(source, { withFileTypes: true })
		.filter((dirent: any) => dirent.isDirectory())
		.map((dirent: any) => dirent.name)


// copySync(`./build/templates/node-worker.ts`, './tmp/node-worker.ts');
let nodeTmpl = readFileSync(path.resolve(__dirname, './templates/node-worker.ts.tpl')).toString('utf8');
let webTmpl = readFileSync(path.resolve(__dirname, './templates/web-worker.ts.tpl')).toString('utf8');

getDirectories('./src/nodes').forEach(nodeDir => {
	// destination.txt will be created or overwritten by default.
	const workerPath = `./src/nodes/${nodeDir}/index.ts`

	try {
		if (existsSync(workerPath)) {
			let worker = readFileSync(path.resolve(workerPath)).toString('utf8');
			console.log('copy ' + nodeDir);
			writeFileSync(`./tmp/nodejs/${nodeDir}.ts`, nodeTmpl.replace(/--NODE-WORKER--/, worker));
			writeFileSync(`./tmp/web/${nodeDir}.ts`, webTmpl.replace(/--NODE-WORKER--/, worker));
			// copySync(`./src/nodes/${nodeDir}/index.ts`, './tmp/node.ts');
		}
	} catch (err) {
		console.error(err)
	}
});
