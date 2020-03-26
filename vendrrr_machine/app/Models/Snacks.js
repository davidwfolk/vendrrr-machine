export default class Snacks {

  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.amount = data.amount

  }

  get Template() {
    return /*html*/ `
    <div class="card col-12 col-md-3">
  <div class="card-body text-dark">
    <h5 class="card-title">Available Snacks:</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onclick="app.snackController.buySnack('${this.name}')">Buy ${this.name} - $${this.price}</button>
  </div>
</div>
    `
  }
}
console.log("snacks is linked")