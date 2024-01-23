import { state } from "src/state";

export function initNameText() {
  class NameTextCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
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

      function setName(name) {
        h1.innerHTML = name;
      }

      state.suscribe(() => {
        const name = state.getState().nombre;
        setName(name);
      });

      setName(state.getState().nombre);
      shadow.appendChild(style);
      shadow.appendChild(h1);
    }
  }
  customElements.define("name-text-ce", NameTextCE);
}
