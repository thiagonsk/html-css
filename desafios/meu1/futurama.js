function showMenu()
{
    var menu = window.document.getElementById("menu");
    var header = document.getElementById('header');
    if (menu.style.display == 'none'){
        menu.style.display = 'block';
        header.style.marginBottom = '20vh';
    } else {
        menu.style.display = 'none';
        header.style.marginBottom = '0vh';
    }
}