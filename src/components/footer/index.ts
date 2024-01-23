export function initFooterCE() {
  class FooterCE extends HTMLElement {
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
        height: 233px;
        background: #FFA0EA;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        font-size: 22px;
        font-weight: 500;
      }      
      `;

      var footer = document.createElement("footer");
      footer.classList.add("root");
      footer.textContent = "Footer";

      shadow.appendChild(style);
      shadow.appendChild(footer);
    }
  }
  customElements.define("footer-ce", FooterCE);
}
