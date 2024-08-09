const btn = document.getElementById('button')
const toast = document.getElementById('toasts')
const messages = [
  'message one',
  'message Two',
  'message Three'
]
const types = [
  'info',
  'success',
  'error'
]
btn.addEventListener('click', () => notiText())

const notiText = (message = null, type = null) => {
  const notiDiv = document.createElement('div')
  notiDiv.classList.add('toast')
  notiDiv.classList.add(type ? type : getRandomType())
  notiDiv.innerText = message ? message: getRandomMessage()

  toast.appendChild(notiDiv)

  setTimeout(() => {
    notiDiv.remove()
  },3000)
}

function getRandomMessage(){
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
  return types[Math.floor(Math.random() * types.length)]
}