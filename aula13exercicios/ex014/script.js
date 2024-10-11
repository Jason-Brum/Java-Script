function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('fotomanha')
    var data = new Date()
    var hora = data.getHours()
    
  

     msg.innerHTML = `Agora são ${hora} horas.`
     if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'Manhã.png'
        document.body.style.background = '#ad9e35'
     } 
     else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'Tarde.png'
        document.body.style.background = '#0090cf'
     }
     else {
        //Boa noite
        img.src = 'Noite.png'
        document.body.style.background = '#253f8c'
        let cor1 = window.document.getElementsByTagName('h1') [0]
        cor1.style.color = 'pink'
     }

}

