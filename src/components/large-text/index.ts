export function initLargeTextCE() {
  class LargeTextCE extends HTMLElement {
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
        width: 100%;
      }      
      
      .root h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 22px;
        font-weight: 500;
      }
      `;

      var div = document.createElement("div");
      var h3 = document.createElement("h3");
      div.classList.add("root");
      h3.textContent = textoOriginal;
      div.appendChild(h3);

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("large-text-ce", LargeTextCE);
}
