'use strict';
// create element
function createElement(tagName, attributes, handlers, content, parent) {
  const elem = document.createElement(tagName);
  if (attributes) {
    for (let key in attributes) {
      if (key === "className") {
        elem.setAttribute("class", attributes[key]);
      } else {
        elem.setAttribute(key, attributes[key]);
      }
    }
  }
  if (handlers) {
    for (let key in handlers) {
      elem.addEventListener(key, handlers[key]);
    }
  }
  elem.textContent = content;
  parent.appendChild(elem);

  return elem;
}

