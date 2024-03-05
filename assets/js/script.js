const mode = document.getElementById('mode-icon')
            mode.addEventListener('click', clicked)
            function clicked(){
                if (mode.classList.contains('fa-sun')){
                mode.classList.remove('fa-sun')
                mode.classList.add('fa-moon')
                }else{
                    mode.classList.remove('fa-moon')
                    mode.classList.add('fa-sun')
                }
            } 