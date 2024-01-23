import { state } from "src/state";

export function initTextInputCE() {
  class TextInputCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const textoOriginal = this.textContent;
      const inputName = this.getAttribute("name");
      this.textContent = "";
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      
      .root label {
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        font-weight: 400;
      }
      
      .root input {
        box-sizing: border-box;
        width: 100%;
        height: 55px;
        border-radius: 4px;
        border: 2px solid black;
        padding-left: 7px;
        font-family: "Poppins", sans-serif;
        font-size: 22px;
        font-weight: 400;
      }
      
      `;

      var div = document.createElement("div");
      div.classList.add("root");

      var label = document.createElement("label");
      label.textContent = textoOriginal;
      div.appendChild(label);

      var input = document.createElement("input");
      input.type = "text";
      input.name = inputName;

      div.appendChild(input);
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("text-input-ce", TextInputCE);
}
