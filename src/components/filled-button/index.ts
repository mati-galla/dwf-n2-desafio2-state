import { state } from "src/state";

export function initFilledButtonCE() {
  class FilledButtonCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const textoOriginal = this.textContent;
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        width: 100%;
        height: 55px;
        border: none;
        border-radius: 4px;
        background: #9CBBE9;
        font-family: "Poppins", sans-serif;
        font-size: 22px;
        font-weight: 500;
        cursor: pointer;
      }      
      `;

      var button = document.createElement("button");
      button.classList.add("root");
      button.textContent = textoOriginal;

      function saveData() {
        const inputsCE = document.querySelectorAll("text-input-ce");
        if (!inputsCE) throw new ReferenceError("No inputs found");
        inputsCE.forEach((e) => {
          const inputEl = e.shadowRoot.querySelector("input");
          const lastState = state.getState();
          state.setState({
            ...lastState,
            [inputEl.name]: inputEl.value,
          });
          console.log(state.getState());
        });

        const selectCE = document.querySelector("select-ce");
        if (selectCE) {
          const selectEl = selectCE.shadowRoot.querySelector("select");
          const lastState = state.getState();
          state.setState({
            ...lastState,
            [selectEl.name]: selectEl.value,
          });
          console.log(state.getState());
        }
      }

      button.addEventListener("click", () => {
        saveData();
      });

      shadow.appendChild(style);
      shadow.appendChild(button);
    }
  }
  customElements.define("filled-button-ce", FilledButtonCE);
}
