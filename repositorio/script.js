// Função para abrir o popup
function abrirPopup() {
    var popup = document.getElementById("meuPopup");
    popup.classList.add("mostrar");
}

// Função para fechar o popup
function fecharPopup() {
    var popup = document.getElementById("meuPopup");
    popup.classList.remove("mostrar");
}
function mudarImagem() {
    var imagem = document.getElementById('imagemProjeto');
    if (imagem.src.match('interfaceAutSap.png')) {
        imagem.src = 'interfaceAutSapII.png';
    } else {
        imagem.src = 'interfaceAutSap.png';
    }
}

function mudarImagemI() {
    var imagem = document.getElementById('imagemProjetoI');
    if (imagem.src.match('')) {
        imagem.src = 'interfaceAutSapII.png';
    } else {
        imagem.src = 'interfaceAutSap.png';
    }
}