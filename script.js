function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

//desafio mudar o alt da imagem





