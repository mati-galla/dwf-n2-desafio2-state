export function initWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <title-ce> Te damos la bienvenida a esta página</title-ce>

  <div class="name-form">
    <large-text-ce> Para continuar ingresá tu nombre </large-text-ce>

    <div class="name-form__row">
      <text-input-ce name='nombre'>Nombre</text-input-ce>
    </div>

    <filled-button-ce id="start-button"> Comenzar </filled-button-ce>
  </div>
  `;

  return div;
}
