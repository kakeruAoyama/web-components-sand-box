export default class colorButton extends HTMLElement {
  constructor() {
    super();
 
    //プロパティの初期化
    this._bgColor = '#ccc';
    this._color = '#333';
 
    //カスタム要素にシャドウ DOM を取り付ける
    this.attachShadow({ mode: "open" });
 
    // シャドウ DOM の文書構造を定義
    this.shadowRoot.innerHTML = `
      <style>
        button {
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          background-color: ${this._bgColor};  /* プロパティの初期値 */
          color: ${this._color};  /* プロパティの初期値 */
          cursor: pointer;
        }
      </style>
      <button type="button">
      <slot name="label" />
      </button>
    `;
  }
 
  get bgColor() {
    return this._bgColor;
  }
 
  get color() {
    return this._color ;
  }
 
  set bgColor(val) {
    this.setAttribute('background-color', val);
    this._bgColor = val;
  }
 
  set color(val) {
    this.setAttribute('color', val);
    this._color = val;
  }
 
  //監視する属性を指定
  static get observedAttributes() {
    return ['color', 'background-color'];
  }
 
  //属性が変更された際に呼び出される
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue === newValue) return;
    // 属性（プロパティ）の値でスタイルを更新
    this.shadowRoot.querySelector('button').style.setProperty(attr, newValue);
  }
}
