import Snack from "../Models/Snacks.js"
import _store from "../store.js"



class SnackService {

buySnack(snackType) {
  let snacks = _store.State.snacks
  for (let i=0; i < snacks.length;i++){
  if (snacks[i].name  == snackType && snacks[i].price <= _store.State.money.count) {

  }

  }
}
}
 console.log("${snackType} purchased")

console.log("snackservice is linked");

const SNACKSERVICE = new SnackService()
export default SNACKSERVICE