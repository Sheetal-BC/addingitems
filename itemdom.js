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

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var main = document.querySelector('.title');
// // console.log(headerTitle);
// // headerTitle.textContent = ' Hello';
// // headerTitle.innerText = 'Goodbye'
// main.style.fontWeight = 'bold';
// main.style.color = 'green';
// main.innerHTML = 'ADD ITEMS';
// header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';


for(let i = 0; i<items.length; i++){

    items[i].style.backgroundColor = 'gray';
}
items[2].style.backgroundColor = 'yellow';

for(let i = 0; i<items.length; i++){

    items[i].style.fontWeight = 'bold';
}


