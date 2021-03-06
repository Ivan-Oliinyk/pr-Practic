import * as $ from "jquery";

function createAnalitics() {
  let counter = 0;
  let isDestroyed = false;

  const listener = () => counter++;

  document.addEventListener("click", listener);

  return {
    destroy() {
      document.removeEventListener("click", listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return `Analitics is destroyed. Total click = ${counter}`;
      }
      return counter;
    },
  };
}

window.analitics = createAnalitics();
console.log("Analitics");
