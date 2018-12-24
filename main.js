function cambiar() {
    document.getElementById('corazon').src = "../img/heart1.svg";
}

function volver() {
    document.getElementById('corazon').src = "../img/heart.svg";
}

function cambiarMenu(id) {
    switch (id) {
        case 1:
            document.getElementById('casa').src = "../img/home.1.svg";
            break;
        case 2:
            document.getElementById('lupa').src = "../img/search.1.svg";
            break;
        case 3:
            document.getElementById('corasao').src = "../img/heart1.svg";
            break;
        case 4:
            document.getElementById('mas').src = "../img/plus-square.1.svg";
            break;
        case 5:
            document.getElementById('user').src = "../img/user.1.svg";
            break;
        default:
        // code block
    }


}
function volverMenu(id) {
    switch (id) {
        case 1:
            document.getElementById('casa').src = "../img/home.svg";
            break;
        case 2:
            document.getElementById('lupa').src = "../img/search.svg";
            break;
        case 3:
            document.getElementById('corasao').src = "../img/heart.svg";
            break;
        case 4:
            document.getElementById('mas').src = "../img/plus-square.svg";
            break;
        case 5:
            document.getElementById('user').src = "../img/user.svg";
            break;
        default:
        // code block
    }


}
