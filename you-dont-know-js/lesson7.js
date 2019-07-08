'use strict';

let collect = document.querySelector('.books');
let elem = document.querySelectorAll('.book');
// console.log(elem.classList);

// collect.removeChild(elem[0]);
collect.insertBefore(elem[1], elem[0]);
collect.insertBefore(elem[4], elem[2]);
collect.insertBefore(elem[3], elem[2]);
collect.insertBefore(elem[5], elem[2]);
// collect.appendChild(elem[0]);
// collect.appendChild(elem[2]);
// collect.replaceChild(elem[1], elem[5]);
// collect.removeChild(elem[1]);
// collect.appendChild(elem[1]);
console.log(elem);

let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
console.log(body);

let changeWord = document.querySelectorAll('a');
console.log(changeWord);
console.log(changeWord[2].textContent);
changeWord[2].textContent = 'Книга 3. this и Прототипы Объектов';

let adve = document.querySelector('.adv');
console.log(adve);
// adve.remove();
adve.style.display = 'none';


let ulMain = document.querySelectorAll('ul');
let el = document.querySelectorAll('li');
// console.log(ulMain[1].insertBefore(el[12], el[14]));
ulMain[1].insertBefore(el[8], el[16]);
ulMain[1].insertBefore(el[10], el[12]);
ulMain[1].insertBefore(el[11], el[12]);
ulMain[1].insertBefore(el[12], el[10]);
ulMain[1].insertBefore(el[14], el[10]);
// ulMain[1].children[1];





console.log(ulMain[4].insertBefore(el[45], el[38]));
console.log(ulMain[4].insertBefore(el[38], el[41]));
console.log(ulMain[4].insertBefore(el[41], el[44]));
// ulMain[4].insertBefore(el[49], el[38]);
// ulMain[4].insertBefore(el[40], el[39]);
// ulMain[4].insertBefore(el[38], el[41]);
// ulMain[4].insertBefore(el[38], el[41]);
// console.log(ulMain[4].insertBefore(el[54], el[41]));
// console.log(elementLi[3]);
// let addContent = document.querySelectorAll('li');
// // console.log(changeWord);
// console.log(addContent[5].textContent);
// // changeWord[2].textContent = 'Книга 3. this и Прототипы Объектов';
// ulMain[5].addContent[5].textContent = 'Глава 8: За пределами ES6';
// console.log(ulMain[5].insertBefore(el[41], el[44]));

// console.log(ulMain[5]);
let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
ulMain[5].appendChild(newElem); 
console.log(ulMain[5].insertBefore(el[56], null));
// books.sort();
// // books.forEach(book => {
// //     book.sort();
// // });
// // books.setAttribute('style', 'font-size: 24px');
// // console.log(books);

// // collect[0].replaceChild(elem[0]);
// collect[0].appendChild(elem[0]);
// collect[0].insertBefore(elem[3], elem[4]);
// // collect[0].appendChild(elem[2]);
// // collect[0].appendChild(elem[3]);
// // collect[0].appendChild(elem[4]);
// console.log(collect);
