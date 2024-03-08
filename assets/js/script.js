const mode = document.getElementById('mode-icon')
const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('nav.nav-right')
const links = document.querySelectorAll('.a')
const container = document.querySelector('.content')
const contact = document.querySelector('.contact-left')
const curiosity = document.querySelector('.curiosity')
const footer = document.querySelector('footer')    
        mode.addEventListener('click', clicked)
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                body.classList.toggle('light_body')
                header.classList.toggle('light_header')
                container.classList.toggle('light_content')
                nav.classList.toggle('light_nav-right')
                contact.classList.toggle('light-contact')
                curiosity.classList.toggle('light-curiosity')
                footer.classList.toggle('light-footer')
                for (let c = 0; c < links.length; c++)
                    links[c].classList.toggle('a_light')
            }
        } 