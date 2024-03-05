const mode = document.getElementById('mode-icon')
const body = document.querySelector('body')
const header = document.querySelector('header')
const container = document.querySelector('.content')
const nav = document.querySelectorAll('.a')
        mode.addEventListener('click', clicked)
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                body.classList.toggle('light')
                header.classList.toggle('light_header')
                container.classList.toggle('light_content')
                console.log('aqui')
                for (let c = 0; c < nav.length; c++)
                    nav[c].classList.toggle('a_light')
            }
        } 