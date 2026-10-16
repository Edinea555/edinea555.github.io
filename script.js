
const CONTACT = {
  email: 'edinea555@gmail.com',
  linkedin: 'https://www.linkedin.com/in/edineaconceicao/',
  github: 'https://github.com/Edinea555/edinea555.github.io/'
};

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}));

const links = [
  ['email-link', CONTACT.email ? `mailto:${CONTACT.email}` : null],
  ['linkedin-link', CONTACT.linkedin],
  ['github-link', CONTACT.github]
];
links.forEach(([id, href]) => {
  const link = document.getElementById(id);
  if (href) link.href = href;
  else {
    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');
    link.title = 'Adicione seu contato no arquivo script.js antes de publicar';
    link.style.opacity = '.55';
    link.style.cursor = 'not-allowed';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
