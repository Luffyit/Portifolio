const mode = document.getElementById('mode-icon')
const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('nav.nav-right')
const links = document.querySelectorAll('.a')
const container = document.querySelector('.content')    
        mode.addEventListener('click', clicked)
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                body.classList.toggle('light_body')
                header.classList.toggle('light_header')
                container.classList.toggle('light_content')
                nav.classList.toggle('light_nav-right')
                console.log('aqui')
                for (let c = 0; c < links.length; c++)
                    links[c].classList.toggle('a_light')
            }
        } 