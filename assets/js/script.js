const mode = document.getElementById('mode-icon')
const root  = document.querySelector(':root')  
mode.addEventListener('click', clicked)
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                root.style.setProperty('--dark-main-color', '#F4F3F7');
                root.style.setProperty('--white-main-color', '#1C1D26'); 
                root.style.setProperty('--dark-secondary-color: #0F2027;');
                root.style.setProperty('--white-secondary-color', '#c8c8ca');
            }
        } 