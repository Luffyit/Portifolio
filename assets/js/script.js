const mode = document.getElementById('mode-icon')
const root  = document.querySelector(':root')  
const copy = document.querySelectorAll('.contact-p')
mode.addEventListener('click', clicked)
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                root.classList.toggle('light')
            }
        } 
        function copied(who){
            console.log(copy)
            if(who == 'first'){
                let i = copy[0].textContent
                navigator.clipboard.writeText(i)
            }else{
                let i = copy[1].textContent
                navigator.clipboard.writeText(i)
            }
        }