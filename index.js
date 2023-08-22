const menu = document.querySelector('#mune');
const background = document.querySelector('#background');
const sidenav = document.querySelector('#sidenav');
const closeelem = document.querySelector('#close');
closeelem.addEventListener('click', function(){
    background.style.transform = 'translatex(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidenav.style.left = '-10%';

})
menu.addEventListener('click', function(){
    background.style.transform = 'translatex(100px) scale(.4) rotatey(-5.5deg) skewy(8deg)';
    background.style.filter = 'blur(1.1px)';
    sidenav.style.left = '2%';
})