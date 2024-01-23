import { initRouter } from "./router";
import { initHeaderCE } from "./components/header";
import { initFooterCE } from "./components/footer";
import { initTitleCE } from "./components/title";
import { initNameText } from "./components/name";
import { initLargeTextCE } from "./components/large-text";
import { initTextInputCE } from "./components/text-input";
import { initSelectCE } from "./components/select";
import { initFilledButtonCE } from "./components/filled-button";

(function () {
  initHeaderCE();
  initFooterCE();
  initTitleCE();
  initNameText();
  initLargeTextCE();
  initTextInputCE();
  initSelectCE();
  initFilledButtonCE();

  const welcome = /\/welcome/;
  const form = /\/form/;

  if (!welcome.test(location.pathname) && !form.test(location.pathname)) {
    location.pathname = "/welcome";
  }
  const mainContainer = document.querySelector<HTMLElement>(".main-container");
  if (!mainContainer)
    throw new ReferenceError('Class "main-container" not found.');
  initRouter(mainContainer);
})();
