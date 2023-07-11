class MyElement extends HTMLElement {
  constructor() {
    super();
  }
  // 要素が document に追加された時に呼び出されるライフサイクルコールバック
  connectedCallback() {
    //this は <my-element>
    this.textContent = 'This is My Element!';
  }
}
customElements.define('my-element', MyElement);
