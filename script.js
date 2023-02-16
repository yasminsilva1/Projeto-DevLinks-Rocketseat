function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  // Selecionar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem dentro da condicional
  if (hmtl.classList.contains("light")) {

    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.svg")

    // Armazenar a preferência do usuário no localStorage
    localStorage.setItem("mode", "light")

  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.svg")

    // Armazenar a preferência do usuário no localStorage
    localStorage.setItem("mode", "dark")
  }
}

// Recupera a preferência do usuário ao carregar a página
const mode = localStorage.getItem("mode")
if (mode === "light") {
  document.documentElement.classList.add("light")
  document.querySelector("#profile img").setAttribute("src", "./assets/avatar-light.svg")
} else {
  document.documentElement.classList.remove("light")
  document.querySelector("#profile img").setAttribute("src", "./assets/avatar-dark.svg")
}