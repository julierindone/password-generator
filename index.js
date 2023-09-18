const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const lettersAndNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordBoxes = document.getElementById("boxes")
let passwordOne = ""
let passwordOneEl = document.getElementById("pw-one")
let passwordTwo = ""
let passwordTwoEl = document.getElementById("pw-two")

function generatePasswords() {
  // display the boxes:
  passwordBoxes.style.display = "flex"

  // make passwords
  passwordOne = makePassword()
  passwordTwo = makePassword()

  // display passwords
  passwordOneEl.innerText = passwordOne
  passwordTwoEl.innerText = passwordTwo
}

function makePassword() {
  let pw = ""

  for (let i = 0; i < 16; i++) {
    let index = Math.floor(Math.random() * characters.length)
    pw += characters[index]
  }
  return pw
}
