document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;

        headings.forEach(h2 => {
            const h2Position = h2.getBoundingClientRect().top;

            // Se o h2 estiver a 50% ou mais da altura da tela
            if (h2Position <= windowHeight * 0.5) {
                h2.classList.add('active');
            } else {
                h2.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Para verificar na carga inicial
});
