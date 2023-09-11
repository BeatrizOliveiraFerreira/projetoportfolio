function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img ")
  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/foto-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos preto e casaco jeans, e fundo roxo."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto.jpg")
  }

     img.style.borderRadius = "50%";
}
