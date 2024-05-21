// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);
// const primeiroItemLi = primeiraLi

// const linkInterno = document.querySelectorAll('a[href^="#]');
// console.log(linkInterno);

// const animainImg = document.querySelectorAll('#animais img');
// console.log(animainImg);

// const htmlCollection = document.getElementsByClassName('grid-section');
// console.log(htmlCollection);
// const nodeList = document.querySelectorAll('.grid-section');
// console.log(nodeList);

// nodeList.forEach(function (item, index){
//   console.log(item, index);
// })

// arrayGrid = Array.from(htmlCollection);
// arrayGrid.forEach(function (item, index){
//   console.log(item, index);
// })



// //retornar no console apenas as imgs que começarem com 'assets'
// const animaisImg = document.querySelectorAll('#animais img[src^="./assets"]');
// console.log(animaisImg);

// //selecione todos os links internos onde o href começa com #
// const linkIntCerquilha = document.querySelectorAll('.menu a[href^="#"]');
// console.log(linkIntCerquilha);

// //selecione o primeiro h2 dentro de .animais-descrição
// const h2Animais = document.querySelector('.animais-descricao h2');
// console.log(h2Animais.textContent);

// //selecione o ultimo p do site
// const lastP = document.querySelectorAll('p');
// console.log(lastP[lastP.length - 1]);

// const imgs = document.querySelectorAll('img');
// imgs.forEach((item, index, array) => {
//   console.log(item);
// });

//mostre no console cada paragrafo desse site 
// const allP = document.querySelectorAll('p');
// allP.forEach((item) => {
//   console.log(item);
// })

// //mostre o texto dos p's no console
// const allPText = document.querySelectorAll('p');
// allPText.forEach((item) => {
//   console.log(item.innerText);
// });

const img = document.querySelector('img');
img.setAttribute('alt', 'raposinhaxD');

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});








