function showMenu(){
    const burguer = document.querySelector('#burguer');
    const dynamicMenu = document.querySelector('.dynamic-menu');
    const menuHeader = document.querySelector('.MenuHeader');

    let isVisible = false;

    menuHeader.addEventListener('click', (e) =>{
        const el = e.target;
        if(el.id === 'burguer'){
            if(isVisible){
                dynamicMenu.style.display = 'none';
            }else{
                dynamicMenu.style.display = 'block';
            }

            isVisible = !isVisible;
        }
    })
}

showMenu();