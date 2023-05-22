const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('caret');
    const menu = dropdown.querySelector('menu');
    const options = dropdown.querySelectorAll('.menu-li');
    const selected = dropdown.querySelector('selected');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('cared-rotate');
        menu.classList.toggle('menu-opem');
    });

    options.forEach(options => {
        options.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('meni-open');
            options.forEach(option => {
                options.classList.remove('active');
            });
            options.classList.add('active');
        });
    });
});