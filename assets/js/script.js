const mode = document.getElementById('mode-icon')
const root  = document.querySelector(':root')  
mode.addEventListener('click', clicked)
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                root.classList.toggle('light')
            }
        } 