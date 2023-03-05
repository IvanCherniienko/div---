const input = document.querySelector('.js-input')
let messageElement = document.createElement('div')
messageElement.textContent = 'Сообщение'

input.addEventListener('focus', onInputFocus)
input.addEventListener('blur', onInputBlur)

function onInputFocus() {
    input.insertAdjacentElement('beforebegin', messageElement)
}

function onInputBlur() {
    messageElement.remove()
}