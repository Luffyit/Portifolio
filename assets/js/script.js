const mode = document.getElementById('mode-icon')
const body = document.querySelector('body')
const header = document.querySelector('header')
const container = document.querySelector('div.content')
console.log(container)
            mode.addEventListener('click', clicked)
            function clicked(){
                if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                body.classList.toggle('light')
                header.classList.toggle('light_header')
                container.classList.toggle('light_content')
                }
            } 