//Efeito de clicar do Nav

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const underline = document.querySelector('nav span');

    let activeLink = null; 

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            if (activeLink) {
                activeLink.classList.remove('active');
            }

            activeLink = link;

            
            activeLink.classList.add('active');

            const linkWidth = activeLink.offsetWidth;
            const offsetLeft = activeLink.offsetLeft;
            const centerPosition = offsetLeft + (linkWidth / 2) - (underline.offsetWidth / 2);

            underline.style.width = `${linkWidth}px`;
            underline.style.transform = `translateX(${centerPosition}px)`;

            if (link.getAttribute('href') && link.getAttribute('href').trim() !== '') {
                return true;
            }
            
            e.preventDefault();
        });
    });
});

//Consertar o nav nao funcionar os links

document.addEventListener('DOMContentLoaded', function() {
    const inicioLink = document.querySelector('a[href="#inicio"]');

    if (inicioLink) {
        inicioLink.addEventListener('click', function(e) {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// IFuncionamento das #

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.cabecalho').offsetHeight; 
                const offsetTop = targetElement.offsetTop - navHeight; 

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
