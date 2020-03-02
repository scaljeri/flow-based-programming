const { Worker } = require('worker_threads')

function runService (workerData) {
	console.log('SETUP')
	return new Promise((resolve, reject) => {
		const worker = new Worker('./random-number-generator.js', { workerData })
		worker.on('message', d => {
			console.log('d=' + d)
			resolve()
		})
		worker.on('error', reject)
		worker.on('exit', code => {
			if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`))
		})
	})
}

async function run () {
	console.log('run')
	const result = await runService('abc.js')
	console.log(result)
}

run().catch(err => console.error(err))
