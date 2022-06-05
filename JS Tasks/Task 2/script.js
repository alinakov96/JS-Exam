/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

window.addEventListener("load", () => {
  const counter = document.querySelector("#btn__state");
  const triggerButton = document.querySelector("#btn__element");

  triggerButton.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) + 1;
  });
});
