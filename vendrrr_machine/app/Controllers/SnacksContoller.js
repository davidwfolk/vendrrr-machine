import _snacksService from "../Services/SnacksService.js";
import _moneyService from "../Services/MoneyService.js";
import _store from "../store.js";

function _drawSnacks() {
  let template = "";
  let snacks = _store.State.snacks;
  // let purchasedSnacks = _store.State.purchasedSnacks

  snacks.forEach(snack => (template += snack.Template));
  document.getElementById("snacks-display").innerHTML = template;

  // purchasedSnacks.forEach(document.getElementById("snack-purchased").innerHTML = )
}

function _drawQuarter() {
  let template = "";
  let money = _store.State.money;

  money.forEach(quarter => (template += quarter.Template));
  document.getElementById("money-display").innerHTML = template;

  let pSnacks = _store.State.purchasedSnacks;
  for (let i = 0; i < pSnacks.length; i++) {
    document.getElementById(
      "purchased-snacks"
    ).innerHTML = `<h3>Last Snack Purchased: ${pSnacks[i]}</h3>`;
  }
}

export default class SnacksController {
  constructor() {
    _drawSnacks();
    console.log("Snacks Controller is linked");
  }
  buySnack(snackType) {
    _snacksService.buySnack(snackType);
    _drawSnacks();
    _drawQuarter();
  }
}