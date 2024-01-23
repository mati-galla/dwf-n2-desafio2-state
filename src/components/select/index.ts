const createValue = (str) => {
  const sinTildes = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return sinTildes.toLowerCase().replace(" ", "-");
};

export function initSelectCE() {
  class SelectCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const selectLabel = this.getAttribute("label");
      var opcionesSelect: string[] = [];
      for (const child of this.children) {
        if (typeof child.textContent == "string") {
          opcionesSelect.push(child.textContent);
        }
      }
      this.innerHTML = "";

      const selectName = this.getAttribute("name");
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
      
      .root select {
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
      label.textContent = selectLabel;
      div.appendChild(label);

      var select = document.createElement("select");
      select.name = selectName;
      opcionesSelect.forEach((e) => {
        var opcion = document.createElement("option");
        opcion.textContent = e;
        opcion.value = createValue(e);
        select.appendChild(opcion);
      });
      div.appendChild(select);

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("select-ce", SelectCE);
}
