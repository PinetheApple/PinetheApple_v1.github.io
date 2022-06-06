const menu= document.querySelector('.ham')
const btn=document.querySelector('.button')
const dropd=document.querySelector('.dropdown')
var w = (window.innerWidth > 0) ? window.innerWidth : screen.width;

menu.addEventListener('click', function(){ 
    btn.classList.remove('button')
    if(menu.classList.contains('fa-bars'))
    {
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-xmark')
        //stuff for menu to drop down
        
        dropd.classList.add('drop')
    }
    else{
        menu.classList.remove('fa-xmark')
        menu.classList.add('fa-bars')
        //hide the menu
        dropd.classList.remove('drop')
    }
    
});