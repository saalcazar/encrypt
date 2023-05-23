//Capture the textarea
const original = document.getElementById('original')
const modified = document.getElementById('modified')

//Capture the buttons
const encrypt = document.getElementById('encrypt')
const decrypt = document.getElementById('decrypt')
const copy = document.getElementById('copy')

console.log(modified)

const encryptText = () => {
  encrypt.addEventListener('click', () => {
    let textArray = original.value.split('')
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] === 'a') {
        textArray[i] = 'ai'
      }else if (textArray[i] === 'e') {
        textArray[i] = 'enter'
      }else if (textArray[i] === 'i') {
        textArray[i] = 'imes'
      }else if (textArray[i] === 'o') {
        textArray[i] = 'ober'
      }else if (textArray[i] === 'u') {
        textArray[i] = 'ufat'
      }
    }
    modified.value = textArray.join('')
  })
}

const decryptText = () => {
  decrypt.addEventListener('click', () => {
    let textArray = original.value.split('')
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] === 'a' && textArray[i + 1] === 'i') {
        textArray[i] = 'a'
        textArray.splice(i + 1, 1)
      }else if (textArray[i] === 'e' && textArray[i + 1] === 'n' && textArray[i + 2] === 't' && textArray[i + 3] === 'e' && textArray[i + 4] === 'r') {
        textArray[i] = 'e'
        textArray.splice(i + 1, 4)
      }else if (textArray[i] === 'i' && textArray[i + 1] === 'm' && textArray[i + 2] === 'e' && textArray[i + 3] === 's') {
        textArray[i] = 'i'
        textArray.splice(i + 1, 3)
      }else if (textArray[i] === 'o' && textArray[i + 1] === 'b' && textArray[i + 2] === 'e' && textArray[i + 3] === 'r') {
        textArray[i] = 'o'
        textArray.splice(i + 1, 3)
      }else if (textArray[i] === 'u' && textArray[i + 1] === 'f' && textArray[i + 2] === 'a' && textArray[i + 3] === 't') {
        textArray[i] = 'u'
        textArray.splice(i + 1, 3)
      }
    }
    modified.value = textArray.join('')
  })
}

const copyText = () => {
  copy.addEventListener('click', () => {
    let text = modified.value
    if (text) {
      original.value = text
      modified.value = ''
    }
  })
}

encryptText()
decryptText()
copyText()