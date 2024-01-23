import { initWelcome } from "src/pages/welcome";
import { initForm } from "src/pages/form";
import { state } from "src/state";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/form/,
    component: initForm,
  },
];

export function initRouter(container: HTMLElement) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleEvents() {
    const startButton = document.querySelector("#start-button");
    startButton?.addEventListener("click", () => {
      goTo("/form");
    });

    const sendButton = document.querySelector("#send-button");
    sendButton?.addEventListener("click", () => {
      console.log(state.getState());
      goTo("/welcome");
    });
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild?.remove();
        }
        container.appendChild(el);
      }
    }
    handleEvents();
    window.scrollTo(0, 0);
  }
  handleRoute(location.pathname);
}
