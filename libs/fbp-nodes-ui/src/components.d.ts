/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FbpRandomNumberGenerator {}
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLFbpRandomNumberGeneratorElement extends Components.FbpRandomNumberGenerator, HTMLStencilElement {}
  var HTMLFbpRandomNumberGeneratorElement: {
    prototype: HTMLFbpRandomNumberGeneratorElement;
    new (): HTMLFbpRandomNumberGeneratorElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'fbp-random-number-generator': HTMLFbpRandomNumberGeneratorElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface FbpRandomNumberGenerator {}
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'fbp-random-number-generator': FbpRandomNumberGenerator;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'fbp-random-number-generator': LocalJSX.FbpRandomNumberGenerator & JSXBase.HTMLAttributes<HTMLFbpRandomNumberGeneratorElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}


