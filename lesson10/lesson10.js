'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;


}

  let insertData = prompt('Введите . или #');

DomElement.prototype.enterElements = function () {

  if (this.selector[0] == '.') {
    let div = document.createElement('div');
    div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    div.id = "text";
    div.innerHTML = `<div> ${this.selector} </div>`;
    div.textContent = `${this.selector}`;
    document.body.appendChild(div);

  }
  if (this.selector[0] == '#') {
    let para = document.createElement('p');
    para.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    para.className = "text";
    para.innerHTML = `<p> ${this.selector} </p>`;
    para.textContent = `${this.selector}`;
    document.body.appendChild(para);
  }
};


let air = new DomElement(insertData, 200, 300, 'red', 30);
air.enterElements();