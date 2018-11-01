// const link = document.querySelector('a');
// link.textContent = "MDN";
// link.href = "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents";
// const sect = document.querySelector('section');
// if(Math.random() < 0.33) {
// }
// //  for (let i=0; i < 3; i++){

// // const para = document.createElement('p');
// // para.textContent=i+ 1 +" best  in the world";
// // const sect = document.querySelector('section');
// // sect.appendChild(para);
// // para.classList.add('highlight');
// //  };
// const img = document.querySelector('img');
// sect.appendChild(img);

// const h1 = document.querySelector('h1');
// h1.parentNode.removeChild(h1);

// const btn = document.getElementById('btn');
// btn.addEventListener('click', function(e) {
//     const str = inpt.value;
//     const res = str.split('').reverse().join('');
//     result.innerHTML = res;
//     e.preventDefault();
// });

// $('.hide-pars').click(hidePars);
// function hidePars() {
//     $('p').toggle(1000);
// }



//calcul
// document.querySelectorAll('.digits')
//     .forEach( el => el.addEventListener('click', digitClick) );
// function digitClick(e) {
//     const target = e.target;
//     const display = document.querySelector('.display');
//     display.value += target.innerText;
// }

document.querySelectorAll('.digits, .operation')
    .forEach(el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}

document.querySelector('.equal')
    .addEventListener('clik', equal);

function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

