import 'jest-preset-angular';

// declare var PointerEvent;
Object.defineProperty(window, 'PointerEvent', { value: jest.fn() });
