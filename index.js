const input = document.querySelector('.js-input')

input.addEventListener('focus', onInputFocus)
input.addEventListener('blur', onInputBlur)

function onInputFocus() {
    messageElement = document.createElement('div')
    messageElement.textContent = 'Сообщение'
    input.insertAdjacentElement('beforebegin', messageElement)
}

function onInputBlur() {
    messageElement.remove()
}