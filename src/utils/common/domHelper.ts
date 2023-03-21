export interface Attribute {
  class: string;
  [key: string]: string | boolean;
}

export const $ = (selector: string, parentNode: ParentNode | null = document) =>
  parentNode && parentNode.querySelector(selector);
export const $$ = (selector: string, parentNode: ParentNode | null = document) =>
  parentNode && parentNode.querySelectorAll(selector);

export const getElement = (template: string) => {
  const root = document.createElement('div');
  root.innerHTML = template;

  return root.firstElementChild;
};

export const replaceComponent = (element: Element | null, component: Element | null) => {
  if (!element || !component || !element.parentNode) return;

  element.replaceWith(component);
};
