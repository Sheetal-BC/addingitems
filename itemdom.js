// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype)
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// getelementbyid

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var main = document.querySelector('.title');
// // console.log(headerTitle);
// headerTitle.textContent = ' Hello';
// headerTitle.innerText = 'Goodbye'
// main.style.fontWeight = 'bold';
// main.style.color = 'green';
// main.innerHTML = 'ADD ITEMS';
// header.style.borderBottom = 'solid 3px #000';

// getelementbyclassname

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';


// for(let i = 0; i<items.length; i++){

// items[i].style.backgroundColor = 'gray';
// }
// items[2].style.backgroundColor = 'yellow';

// for(let i = 0; i<items.length; i++){

//     items[i].style.fontWeight = 'bold';
// }



//class getelementbytagname

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// for(let i = 0; i<li.length; i++){
//        li[i].style.backgroundColor = 'gray';
//     }
    

// querryselector

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value ='SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'green';

// let lastItem = document.querySelector('.list-group-item:last-child'); 
// lastItem.style.color = 'green';

// // let secondItem = document.querySelector
// // ('.list-group-item:nth-child(2)'); 
// // secondItem.style.color = 'red';

// let secondItem = document.querySelector
// ('.list-group-item:nth-child(2)'); 
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector
// ('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// querryselectorall

let title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(let i=0; i<odd.length; i++){
//   odd[i].style.backgroundColor = "green";
//   even[i].style.backgroundColor = "#ccc";
// }

// let li = document.querySelectorAll('.list-group-item');
// console.log(li);
// li[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//    odd[i].style.backgroundColor = "green";
// }


//MANIPULATING THE DOM

var itemList = document.querySelector('#items');

// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parent element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childnode
// console.log(itemList.childNodes);

// children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstchild
// console.log(itemList.firstChild);
// // firstElementChils
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastchild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);
// nextElementsibing
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
let newDiv = document.createElement('div');

//  add class
newDiv.className = 'hello';
console.log(newDiv);

// add id
newDiv.id = 'hello 1';

// add attr
newDiv.setAttribute('title','Hello Div');

// to append before item lister

// create text node
// let newDivText = document.createTextNode('HELLO WORLD');

// add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// to append before item 1
let newDivt = document.createElement('li');
newDivt.className = 'list-group-item';
console.log(newDivt);

let newDivTxt = document.createTextNode('HELLO WORLD');
newDivt.appendChild(newDivTxt);
let containr = document.querySelector('#main ul');
let li = document.querySelector('ul li');
containr.insertBefore(newDivt,li);











