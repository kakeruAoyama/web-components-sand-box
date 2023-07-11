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

  //監視する属性を指定
  static get observedAttributes() {
    return ['foo'];
  }

  //上記で指定した属性が変更された際に呼び出される
  attributeChangedCallback(attr, oldValue, newValue) {
    //foo 属性が変更された場合（第1引数の属性名が foo の場合）
    if (attr === 'foo') {
      //値が同じであれば何もしない
      if (oldValue === newValue) return;
      //foo 属性（プロパティ）の値を更新（この場合、getter/setter があるので省略可能）
      this[attr] = newValue;
      //出力を更新
      this.textContent = `Hello ${this.foo}!`;
    }
  }

  connectedCallback() {
    if(this.foo) {
      //foo 属性の値があればその値を使って内容を更新
      this.textContent = `Hello ${ this.foo }!`;
    }else{
      //foo 属性の値がなければ「Hello Foo!」と表示
      this.textContent = 'Hello Foo!';
    }
  }
}
customElements.define('my-element', MyElement);
