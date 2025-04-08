export function clearErrorMessage() {
  const errorDiv = document.getElementById('error-message')
  if (errorDiv) errorDiv.textContent = ''
}

/**
 * Muestra un mensaje de error enDOM
 * @param {string} msg funcion recibe como parametro msg, que se espera que sea un string
 */
export function showErrorMessage(msg) {
  const errorDiv = document.getElementById('error-message')
  if (errorDiv) errorDiv.textContent = msg
}
