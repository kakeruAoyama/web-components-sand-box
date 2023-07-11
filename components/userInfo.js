export default class UserInfo extends HTMLElement {
  constructor() {
    super();
 
    this.attachShadow({ mode: 'open' });
 
    //Light DOM のコンテンツを挿入する位置に slot 要素を配置して name 属性を指定
    this.shadowRoot.innerHTML = `
      <div>Name:
        <slot name="username"></slot>
      </div>
      <div>Birthday:
        <slot name="birthday"></slot>
      </div>
    `;
  }
}
