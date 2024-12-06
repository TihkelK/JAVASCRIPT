const p = document.querySelector('p');
p.removeAttribute('id');
p.setAttribute('attr', 'Tihkel');
console.log(p.getAttribute('attr'));
