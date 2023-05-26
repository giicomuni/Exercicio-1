function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var termo = window.document.getElementById('term')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = "#F2E191"
        document.getElementById("term").textContent = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/entardecer.png'
        document.body.style.background = "#482F88"
        document.getElementById("term").textContent = "Boa tarde!"
    } else if (hora >= 18 && hora > 0 ) {
        img.src = 'img/anoitecer.png'
        document.body.style.background = "#081F39"
        document.getElementById("term").textContent = "Boa noite!"
    } else {
        img.src = 'img/madrugada.png'
        document.body.style.background = "#040403"
        document.getElementById("term").textContent = "Boa madrugada!"
    }
}

