/**
 * Crea el componente de la barra de busqueda.
 * formato JSDoc
 * @param {Function} onSearch // la funcion recibe como parametro variable onSearch, la variable debe ser tipo Function
 * @returns {HTMLElement} // la funcion me devolvera elemento HTML
 */
export function SearchBar(onSearch) {
  const container = document.createElement('div')
  container.id = 'search-container'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'search-input'
  input.placeholder = 'Buscar imágenes...'

  const button = document.createElement('button')
  button.textContent = 'Buscar'

  button.addEventListener('click', () => {
    const searchTerm = input.value.trim()
    if (searchTerm) {
      onSearch(searchTerm)
      input.value = '' // Limpio tras la busqueda
    }
  })

  container.appendChild(input)
  container.appendChild(button)
  return container
}
