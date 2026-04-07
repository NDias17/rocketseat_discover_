function toggleMode(){
  const html = document.documentElement
  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add("light")
  }*/
  html.classList.toggle('light')

  //Alterar a foto de perfil
  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //Substituir as imagens
  if (html.classList.contains("light")) {
    //Se tiver light mode, adiciona a imagem light
    img.setAttribute('src', 'assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Myke Brito com óculos escuros , sorrindo e com fundo roxo e azul')
  }else{
    img.setAttribute('src', 'assets/avatar.png')
    img.setAttribute('alt', 'Imagem de Mayk Brito sorrindo com óculos, t-shirt preta com fundo amarelo')
  }
}