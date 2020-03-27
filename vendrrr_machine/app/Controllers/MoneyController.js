import _moneyService from "../Services/MoneyService.js";
import _store from "../store.js";

function _drawQuarter() {
  let template = "";
  let money = _store.State.money;

  money.forEach(quarter => (template += quarter.Template));
  document.getElementById("money-display").innerHTML = template;
}

export default class MoneyController {
  constructor() {
    _drawQuarter();
    console.log("Money Controller is linked");
  }
  addQuarter() {
    _moneyService.addQuarter();
    _drawQuarter();
  }
}