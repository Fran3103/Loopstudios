const menuHam = document.querySelector('.logo-menu');
const menuCerrar = document.querySelector('.close');
const menu = document.querySelector('.mobile');











menuHam.addEventListener('click', ()=>{

    menu.style.display= 'block';
   
})

menuCerrar.addEventListener('click', () =>{
    menu.style.display= ' none';
    
})
