carregarPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  telaDePosts(posts);
}

telaDePosts = (posts) => {
  const xd = posts.slice(0, 5);
  const container = document.querySelector('.container');
  xd.forEach((post) => {
    const postArea = document.createElement('div');
    postArea.classList.add('post');
    postArea.innerHTML = `
   <h3>${post.title}</h3>
   <p>${post.body}</p>
   `;
    container.appendChild(postArea);
  });
}
window.onload = () => {
  carregarPosts();
}

//titulo com evento ao ser clicado com mensagem no console
const titulo = document.querySelector('h1');
titulo.addEventListener('click', function () {
  console.log('clicou no titulo');
  consultarUrlDaPagina();
});

//consulta da url da pagina atual
function consultarUrlDaPagina() {
  const url = window.location.href;
  console.log(url);
}
//pegando o primeiro elemento com a classe ativada nomeada de title no meu DOM
const activeElement = document.querySelectorAll('.title');
const firstElement = activeElement[0];
console.log(firstElement);

//consulta a linguagem do navegador
const language = navigator.language;
console.log(language);

//retornando a largura da janela
const windowWidth = window.innerWidth;
console.log(windowWidth);







