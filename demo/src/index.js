function createElement(tagName, ...children) {
  const element = document.createElement(tagName);
  children.forEach((child) => {
    element.appendChild(child);
  });
  return element;
}

document.getElementById('app').appendChild(createElement(
  'div',
  createElement(
    'p',
    document.createTextNode('Hello, world!!!'),
    document.createTextNode('Hello, world!!!!'),
  ),
  createElement(
    'p',
    document.createTextNode('Hi'),
  ),
));
