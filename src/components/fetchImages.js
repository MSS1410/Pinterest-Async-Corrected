import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

/**
 * Realiza la búsqueda de imágenes en Unsplash.
 * @param {string} query termino que busco
 * @returns {Promise<Object>} respuesta en modo objeto, em la propiedad results
 */
export async function fetchImages(query) {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      perPage: 12
    })

    if (result.errors && result.errors.length > 0) {
      console.error('Error en la búsqueda:', result.errors[0])
      return { results: [] }
    }

    return result.response
  } catch (error) {
    console.error('Error al obtener imágenes:', error)
    return { results: [] }
  }
}
