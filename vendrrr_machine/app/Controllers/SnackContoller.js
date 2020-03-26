import _snackService from "../Services/SnackService.js"
import _store from "../store.js"

function _drawSnacks() {
  let template = ''
  let snacks = _store.State.snacks

snacks.forEach(snack => template += snack.Template)
document.getElementById('snacks-display').innerHTML = template;
}

export default class SnackController {
  
  
  buySnack(snackType) {
    _snackService.buySnack(snackType)
    _drawSnacks()
  }
  
  
  constructor() {
    _drawSnacks()
  }
}
console.log("snackcontroller is linked")