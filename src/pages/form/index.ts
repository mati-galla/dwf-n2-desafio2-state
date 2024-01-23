export function initForm(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div div class='title-container'>
  <title-ce>Hola,</title-ce> <name-text-ce></name-text-ce>
  </div>

  <large-text-ce>Necesitamos algunos datos más</large-text-ce>
  <div class="data-form">
    <div class="data-form__row">
      <text-input-ce name='email'>Email</text-input-ce>
    </div>

    <div class="data-form__row">
      <text-input-ce name='comida'>Comida favorita</text-input-ce>
    </div>

    <div class="data-form__row">
      <select-ce name='opcion'>
        <li>Piedra</li>
        <li>Papel</li>
        <li>Tijeras</li>
      </select-ce>
    </div>

    <div class="data-form__buttons">
      <filled-button-ce id="send-button">Continuar</filled-button-ce>
    </div>
  </div>
`;

  return div;
}
