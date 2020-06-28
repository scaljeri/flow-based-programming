import 'mocha';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';


import { createUID } from './unique-id';

const should = chai.should();
chai.use(sinonChai);

describe('createUID', () => {
	it('should create a uid', () => {
		should.exist(createUID());
	});

	it('should have the correct format', () => {
		(createUID().match(/-/g) || []).length.should.equal(4);
	});
});
