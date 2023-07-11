class MyElement extends HTMLElement {
  constructor() {
    super();
  }
  // 要素が document に追加された時に呼び出されるライフサイクルコールバック
  get foo() {
    return this.getAttribute('foo');
  }

  // set 属性名() でプロパティの setter を定義
  set foo(val) {
    this.setAttribute('foo', val);
  }

  connectedCallback() {
    this.textContent = `${ this.foo }`;
  }
}
customElements.define('my-element', MyElement);
