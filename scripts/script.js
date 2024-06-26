//NAVEGAÇÃO POR TAB
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('ativo');
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    })
  };
};

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
};
initAccordion();

//ANIMAÇÃO SCROLL SUAVE
function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })
  }
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

// ANIMAÇÃO DAS SECTIONS DE CONTEUDO
function initAnimacaoScroll() {
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.3;
function animasScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    console.log(sectionTop);
    if (isSectionVisible) {
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  })
}
animasScroll();
window.addEventListener('scroll', animasScroll);
}
initAnimacaoScroll();