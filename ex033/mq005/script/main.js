function responsiveDynamicMenu(){
    const burguer = document.querySelector('#burguer');
    const dynamicMenu = document.querySelector('.dynamic-menu');
    const menuHeader = document.querySelector('.MenuHeader');


    function showMenu(){
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

    function monitorsResizing(){
        window.addEventListener('resize', (e) => {
            if(window.innerWidth >= 992){
                dynamicMenu.style.display = 'block';
            }else{
                dynamicMenu.style.display = 'none';
            }
        });
    }

    
    showMenu();
    monitorsResizing();
}

responsiveDynamicMenu();