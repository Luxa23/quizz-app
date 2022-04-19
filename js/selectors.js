function dataJS(name) {
  return `[data-js='${name}']`;
}

function getAllElements(name, context = document) {
  return context.querySelectorAll(dataJS(name));
}

export function getElement(name, context = document) {
  return context.querySelector(dataJS(name));
}

export const bookmarks = getAllElements('svg--bookmark');

export const cards = getAllElements('card');
