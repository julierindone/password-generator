const allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const lettersAndNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let characters = null

let passwordBoxes = document.getElementById("boxes")
let passwordOne = ""
let passwordOneEl = document.getElementById("pw-one")
let passwordTwo = ""
let passwordTwoEl = document.getElementById("pw-two")

//toggle any chars/no special characters
// TODO: for some reason this works until i toggle it OFF... the specials don't turn back on.
let excludeSpecial = false
let charChoiceEl = document.getElementById("char-choice")

// saving for copying passwords but haven't started this yet
let copyPasswordOne = document.getElementById("copy-pw-one")
let copyPasswordTwo = document.getElementById("copy-pw-two")


function displayPasswords() {
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
  if (excludeSpecial === true) {
    console.log(`special characters will be excluded.`)
    characters = lettersAndNumbers
  } else {
    characters = allCharacters
  }
  let pw = ""

  for (let i = 0; i < 16; i++) {
    let index = Math.floor(Math.random() * characters.length)
    pw += characters[index]
  }
  return pw
}

function excludeSpecialChars() {
  excludeSpecial = charChoiceEl.checked
}
