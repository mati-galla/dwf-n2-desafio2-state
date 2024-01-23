export function initTitleCE() {
  class TitleCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const textoOriginal = this.textContent;
      this.textContent = "";
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      
      .root {
        font-family: 'Poppins', sans-serif;
        font-size: 46px;
        font-weight: 700;
      }
      `;

      var h1 = document.createElement("h1");
      h1.classList.add("root");
      h1.textContent = textoOriginal;

      shadow.appendChild(style);
      shadow.appendChild(h1);
    }
  }
  customElements.define("title-ce", TitleCE);
}
