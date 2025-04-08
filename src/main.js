import { SearchBar } from './components/SearchBBar.js'
import { Gallery, renderImages } from './components/Gallery.js'
import { fetchImages } from './components/fetchImages.js'
import { clearErrorMessage, showErrorMessage } from './components/messages.js'

// en app inserto comp
const app = document.getElementById('app')

// almaceno busqueda primera
let initialResults = []

app.appendChild(SearchBar(handleSearch))
app.appendChild(Gallery())

// click en logo para recarga
const logo = document.getElementById('logo')
logo.addEventListener('click', () => {
  clearErrorMessage()
  if (initialResults.length > 0) {
    renderImages(initialResults)
  } else {
    handleSearch('default')
  }
})

// Configurar el btn de Modo Noche
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode')
toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})

// funcion para búsqueda
async function handleSearch(query) {
  clearErrorMessage()

  try {
    const data = await fetchImages(query)
    let results = data.results

    // si hay result, aparco con gatos y aviso con texto
    if (!results || results.length === 0) {
      showErrorMessage(
        `No se encontraron imágenes para "${query}". Se muestran imágenes de "gatos".`
      )
      const defaultData = await fetchImages('gatos')
      results = defaultData.results
    }

    // Guarda el estado inicial solo la primera vez
    if (initialResults.length === 0) {
      initialResults = results
    }

    renderImages(results)
  } catch (error) {
    showErrorMessage('Hubo un error al realizar la búsqueda.')
    console.error(error)
  }
}
