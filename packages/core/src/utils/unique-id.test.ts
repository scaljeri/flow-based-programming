import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';


import { FbpConnection } from './fbp-connection';
import { FbpStreams } from './fbp-streams';
import { createUID } from './unique-id';

const should = chai.should();
chai.use(sinonChai);

describe('createUID', () => {
	it('should instantiate', () => {
		should.exist(createUID());
	});
});
