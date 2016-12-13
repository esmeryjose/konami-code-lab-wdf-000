const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// const alphabet = ['a', 'b', 'c']
var index = 0

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index++

    if (index === code.length) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}

// The code below is working, the one that they give you on the lab, is
// slighty broken
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which)
//   if (e.key === alphabet[index]) {
//     index++
//
//     if (index === alphabet.length ) {
//       alert("YOU DID IT!")
//       index = 0
//     }
//   } else {
//     index = 0
//   }
// }

init();
