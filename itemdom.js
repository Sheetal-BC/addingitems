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

let li = document.querySelectorAll('.list-group-item');
console.log(li);
li[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
   odd[i].style.backgroundColor = "green";
}
