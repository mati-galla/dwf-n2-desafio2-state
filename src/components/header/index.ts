export function initHeaderCE() {
  class HeaderCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        width: 100%;
        height: 60px;
        background-color: #ff8282;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 22px;
        font-weight: 500;
      }      
      `;

      var header = document.createElement("header");
      header.classList.add("root");
      header.textContent = "Header";

      shadow.appendChild(style);
      shadow.appendChild(header);
    }
  }
  customElements.define("header-ce", HeaderCE);
}
