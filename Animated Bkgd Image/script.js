const banner = document.getElementsByClassName('banner')[0] // Pegar o elemento pelo nome da classe e começar pelo Índice 0
const blocks = document.getElementsByClassName('blocks')

for (var i = 1; i < 400; i++) { 
    banner.innerHTML += "<div class='blocks'></div>" //adicionando a quantidade de blocos equivalente ao tamanho da página
    blocks[i].style.animationDelay = `${i * 0.05}s` // adicionando DELAY para que os blocos venham um por vez
}