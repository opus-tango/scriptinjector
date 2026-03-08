function applyStyles() {
  const elementsToCutHeight = document.querySelectorAll(
    "div.text-gray-500 > a, div.text-gray-500 > button",
  );
  const elementsToCutMargin = document.querySelectorAll(
    "div.grid > div, div.grid > form",
  );

  elementsToCutMargin.forEach((el) => {
    el.classList.remove("mb-4");
    el.classList.add("mb-1");
  });
  elementsToCutHeight.forEach((el) => {
    el.classList.remove("h-10");
    el.classList.add("h-6");
  });
}

applyStyles();

const observer = new MutationObserver(applyStyles);
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
