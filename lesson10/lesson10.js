'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;


}

DomElement.prototype.enterElements = function () {
  let insertData = prompt('Введите . или #');
  if (insertData == '.') {
    let div = document.createElement('div');
    div.style.cssText = 'height: 200px; width: 200px; background: brown; font-size: 30px;';
    div.id = "text";
    div.innerHTML = `<div> ${insertData} </div>`;
    div.textContent = `Текст`;
    document.body.appendChild(div);

  }
  if (insertData == '#') {
    let para = document.createElement('li');
    para.style.cssText = 'height: 200px; width: 200px; background: brown; font-size: 30px;';
    para.className = "text";
    para.innerHTML = `<p> ${insertData} </p>`;
    para.textContent = `Текст`;
    document.body.appendChild(para);
  }
};


let air = new DomElement();
air.enterElements();