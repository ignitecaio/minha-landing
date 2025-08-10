document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links da navegação que apontam para uma seção interna da página
    const navLinks = document.querySelectorAll('.nav a, .cta-button');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link de âncora
            e.preventDefault();

            // Pega o href do link (ex: '#servicos')
            const href = link.getAttribute('href');

            // Se o href for uma âncora e não um link externo
            if (href.startsWith('#')) {
                // Encontra a seção correspondente na página
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    // Rola a página suavemente até a seção
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
