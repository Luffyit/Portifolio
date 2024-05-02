// Pegando elementos DOM
const root  = document.querySelector(':root')
const mode = document.getElementById('mode-icon')  
const copy = document.querySelectorAll('.contact-p')
const copyclick = document.querySelectorAll('.fa-copy')

mode.addEventListener('click', clicked) // Event Listner
        function clicked(){
            if (mode.classList.contains('fa-sun')){
                mode.classList.toggle('fa-moon')
                root.classList.toggle('light') // Troca as cores do root
            }
        } 
        function copied(who){ // Confere qual a tag clicada
            if(who == 0){ 
                navigator.clipboard.writeText(copy[who].textContent) //Copia pro clipboard
                copyclick[who].style.color = 'var(--details-color)';
            }else{
                navigator.clipboard.writeText(copy[who].textContent)
                copyclick[who].style.color = 'var(--details-color)';
            }
        }
        function mouseout(who){ //Cor de confirmação pro copyBoard
            if(who == 0){
                copyclick[who].style.color = 'var(--white-primary-color)';
            }else{
                copyclick[who].style.color = 'var(--white-primary-color)';
            }
        }
        
        