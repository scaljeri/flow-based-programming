import { FbpStreams } from './fbp-streams';
import { Observable, BehaviorSubject } from 'rxjs';

import * as chai from 'chai';
import 'mocha';

const should = chai.should();

describe('DataEngine', () => {
	let produceA: BehaviorSubject<any>;
	let produceB: BehaviorSubject<any>;
	let produceC: BehaviorSubject<any>;
	let consumeA: Observable<any>;
	let consumeB: Observable<any>;
	let consumeC: Observable<any>;
	let engine: FbpStreams;

	beforeEach(() => {
		engine = new FbpStreams();

		produceB = engine.produce('b');
		consumeA = engine.consume('a');
		consumeB = engine.consume('b');
		consumeC = engine.consume('a');
		produceA = engine.produce('a');
		produceC = engine.produce('a');
	});

	it('should instantiate', () => {
		should.exist(engine);
	});

	describe('Consume', () => {
		it('should create', () => {
			should.exist(consumeA);
			should.exist(consumeB);
			should.exist(consumeC);
		});

		it('should be of type Observable', () => {
			consumeA.should.be.instanceOf(Observable);
			consumeB.should.be.instanceOf(Observable);
			consumeC.should.be.instanceOf(Observable);
		});

		it('should be different for different ids', () => {
			consumeA.should.not.equal(consumeB);
		});

		it('should be identical if ids are the same', () => {
			consumeA.should.equal(consumeC);
		});
	});

	describe('Produce', () => {
		it('should create', () => {
			should.exist(produceA);
			should.exist(produceB);
			should.exist(produceC);
		});

		it('should be of type Subjects', () => {
			produceA.should.be.instanceOf(BehaviorSubject);
			produceB.should.be.instanceOf(BehaviorSubject);
			produceC.should.be.instanceOf(BehaviorSubject);
		})

		it('should be different for different ids', () => {
			produceA.should.not.equal(produceB);
		});

		it('should be identical if ids are the same', () => {
			produceA.should.equal(produceC);
		});
	});

	describe('#unsubscribe', () => {
		beforeEach(() => {
			engine.unsubscribe('a'); // 3 reference
			engine.unsubscribe('a'); // 2 reference
			engine.unsubscribe('a'); // 1 reference
			engine.unsubscribe('b'); // 1 reference
			engine.unsubscribe('b'); // zero refs -> removed
		});

		it('should cleanup the consume observable if refcount is zero', () => {
			consumeB.should.not.equal(engine.consume('b'));
		});

		it('should cleanup the produce subject if refcount is zero', () => {
			produceB.should.not.equal(engine.produce('b'));
		});

		it('should use the existing consume observable if refcount > 0', () => {
			consumeA.should.equal(engine.consume('a'));
		});

		it('should use the existing produce subject if refcount > 0', () => {
			produceA.should.equal(engine.produce('a'));
		});
	});

	describe('Produce&Consume', () => {
		let valueA: any;
		let valueB: any;
		let valueC: any;

		beforeEach(() => {
			consumeA.subscribe(val => {
				valueA = val;
			});

			consumeB.subscribe(val => {
				valueB = val;
			});

			consumeC.subscribe(val => {
				valueC = val;
			});

			produceB.next(1);
			produceA.next(2);
		});

		it('should consumed values', () => {
			valueA.should.eq(2);
			valueB.should.eq(1);
			valueC.should.eq(2);
		});
	});
});
